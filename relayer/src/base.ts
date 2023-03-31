import { getChainAddressMap, NODE_ENV } from './config/chain.config'

export class Base {
    readonly ChainAddressMap
    readonly rpcUrl: string

    constructor({ env, rpcUrl }: { env: NODE_ENV; rpcUrl }) {
        this.ChainAddressMap = getChainAddressMap(env)
        this.rpcUrl = rpcUrl
    }
}
