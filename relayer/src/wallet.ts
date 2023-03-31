import { ethers } from 'ethers'
import { Base } from './base'

export class Wallet extends Base {
    async isDeployed(walletAddress): Promise<boolean> {
        const provider = new ethers.providers.JsonRpcProvider(this.rpcUrl)
        const result = await provider.getCode(walletAddress)
        return result.toLocaleLowerCase() != '0x'
    }
}
