export const ChainIdMap = {
    matic: '137',
}

export enum NODE_ENV {
    test = 'test',
    prod = 'prod',
}

const ChainAddressEnvMap = {
    test: {
        [ChainIdMap.matic]: {
            jwksGasWalletAddress: '0xc422f169b960edfb90edc3b2b36586a1d0246ec2',
            symbol: 'MATIC',
            multiCall: '0xca11bde05977b3631167028862be2a173976ca11',
            manageWallet: '0x80f26c6be8e5ec7f8db8b14763223c27072f0e6d',
            //jwt
            jwks: '0x0d811def577dfd82b3c2f3b7087d143284e2a2a4',
            currencyAddress: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
            refundAddress: '0xc422f169b960edfb90edc3b2b36586a1d0246ec2',
        },
    },
    prod: {
        [ChainIdMap.matic]: {
            jwksGasWalletAddress: '0x920cbfc823eb8044aa018bf90d954276699ee3c5',
            symbol: 'MATIC',
            multiCall: '0xca11bde05977b3631167028862be2a173976ca11',
            manageWallet: '0x96340a40d77fc0c6279273decdd5184ebdd795ae',
            //jwt
            jwks: '0xdc296873496a3705301d32741d7b92ee77b32678',
            currencyAddress: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
            refundAddress: '0xab771655e692b14d2aea1e7a7be86e4c88fcab21',
        },
    },
}

export function getChainAddressMap(env: NODE_ENV) {
    if (env === NODE_ENV.prod) {
        return ChainAddressEnvMap.prod
    } else {
        return ChainAddressEnvMap.test
    }
}
