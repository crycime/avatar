import { NODE_ENV } from './config/chain.config'
import { ethers } from 'ethers'
import { Wallet } from './wallet'
import { Base } from './base'
import _ from 'lodash'
import { PostInvokeReqDto, RelayerService } from './relayer.service'
import { EthersService } from './ethers/ethers.service'

export class Relayer extends Base {
    public readonly wallet: Wallet
    public readonly relayerService: RelayerService

    constructor({
        env,
        rpcUrl,
        hostname,
    }: {
        env: NODE_ENV
        rpcUrl
        hostname
    }) {
        super({ env, rpcUrl })
        this.wallet = new Wallet({ env, rpcUrl })
        this.relayerService = new RelayerService(hostname)
    }

    async invoke({
        nonce,
        signature,
        walletAddress,
        txs,
        feeTxn,
        speedRate,
        rpcUrl,
        privateKey,
        gasWalletNonce,
    }: PostInvokeReqDto & {
        rpcUrl: string
        privateKey: string
        gasWalletNonce: string
    }): Promise<{ txHash: string }> {
        speedRate = speedRate ?? 1
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
        const { chainId } = await provider.getNetwork()
        const feeData = await EthersService.getRealFeeData(rpcUrl)
        const round = val =>
            _.chain(val)
                .multiply(speedRate as number)
                .round()
                .value()
                .toString()
        const newMaxPriorityFeePerGas = round(
            feeData?.maxPriorityFeePerGas,
        ) as any
        const newMaxFeePerGas = round(feeData?.maxFeePerGas) as any
        const sign = await this.signTransactionByEip1559({
            ...(await this.relayerService.PostPreInvoke({
                nonce,
                signature,
                walletAddress,
                txs,
                feeTxn,
                chainId,
                speedRate,
            })),
            chainId,
            rpcUrl,
            maxPriorityFeePerGas: newMaxPriorityFeePerGas,
            maxFeePerGas: newMaxFeePerGas,
            nonce: gasWalletNonce,
            privateKey,
        })
        const { hash } = await provider.sendTransaction(sign)
        return { txHash: hash }
    }

    async signTransactionByEip1559({
        rpcUrl,
        chainId,
        data,
        to,
        maxPriorityFeePerGas,
        maxFeePerGas,
        gasLimit,
        nonce,
        privateKey,
    }: {
        rpcUrl
        chainId
        data
        to
        maxPriorityFeePerGas
        maxFeePerGas
        gasLimit
        nonce
        privateKey
    }): Promise<string> {
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
        const wallet = new ethers.Wallet(privateKey, provider)
        return await wallet.signTransaction(
            _.omitBy(
                {
                    type: 2,
                    nonce,
                    to,
                    maxPriorityFeePerGas,
                    maxFeePerGas,
                    chainId,
                    data,
                    gasLimit,
                },
                _.isUndefined,
            ),
        )
    }
}
