import { ethers, Signer } from 'ethers'
import { Provider } from '@ethersproject/providers'
import jwksAbi from '../abi/jwks.json'
import manageWalletAbi from '../abi/manageWallet.json'
import multiCallAbi from '../abi/multicall.json'
import userWalletAbi from '../abi/userWallet.json'
import { Jwks, ManageWallet, Multicall, UserWallet } from '../typechain'

export class ContractFactory {
    static jwksContract({
        contractAddress,
        signerOrProvider,
    }: {
        contractAddress: string
        signerOrProvider: Signer | Provider
    }): Jwks {
        return new ethers.Contract(
            contractAddress,
            jwksAbi,
            signerOrProvider,
        ) as Jwks
    }

    static manageWalletContract({
        contractAddress,
        signerOrProvider,
    }: {
        contractAddress: string
        signerOrProvider: Signer | Provider
    }): ManageWallet {
        return new ethers.Contract(
            contractAddress,
            manageWalletAbi,
            signerOrProvider,
        ) as ManageWallet
    }

    static multiCallContract({
        contractAddress,
        signerOrProvider,
    }: {
        contractAddress: string
        signerOrProvider: Signer | Provider
    }): Multicall {
        return new ethers.Contract(
            contractAddress,
            multiCallAbi,
            signerOrProvider,
        ) as Multicall
    }

    static userWalletContract({
        contractAddress,
        signerOrProvider,
    }: {
        contractAddress: string
        signerOrProvider: Signer | Provider
    }): UserWallet {
        return new ethers.Contract(
            contractAddress,
            userWalletAbi,
            signerOrProvider,
        ) as UserWallet
    }
}
