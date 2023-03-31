import axios from 'axios'

export interface Transaction {
    callType: string

    revertOnError: boolean

    gasLimit: string

    target: string

    value: string

    data: string
}

export class PostInvokeReqDto {
    nonce: string
    signature: string
    txs: Transaction[]
    feeTxn: Transaction
    walletAddress: string
    chainId: number
    speedRate?: number
}

export class RelayerService {
    protected hostname: string

    constructor(hostname: string) {
        this.hostname = hostname
    }

    async PostPreInvoke(
        body: PostInvokeReqDto,
    ): Promise<{
        to: string
        gasLimit: any
        data: string
    }> {
        return axios.request({
            method: 'POST',
            url: `${this.hostname}/preInvoke`,
            headers: {
                'Content-Type': 'application/json',
            },
            responseType: 'json',
            data: body,
        })
    }
}
