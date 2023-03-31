import { ethers } from 'ethers'
import _ from 'lodash'

export class EthersService {
    static async getRealFeeData(
        rpcUrl: string,
    ): Promise<{
        maxPriorityFeePerGas: string
        maxFeePerGas: string
        block
        feedata
    }> {
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
        const feedata: any = await provider.getFeeData()
        const block = await provider.getBlock('latest')
        const baseFee = block.baseFeePerGas
        const maxPriorityFeePerGas = feedata.gasPrice
            .sub(baseFee)
            .mul(140)
            .div(100)
        const maxFeePerGas = _.chain(_.toNumber(baseFee))
            .multiply(2)
            .add(maxPriorityFeePerGas)
            .round()
            .value()
        return {
            maxPriorityFeePerGas: maxPriorityFeePerGas.toString(),
            maxFeePerGas: maxFeePerGas.toString(),
            block,
            feedata,
        }
    }
}
