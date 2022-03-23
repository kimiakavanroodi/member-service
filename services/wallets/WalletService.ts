import axios from "axios";

const serviceEndpoint = require('../../config/Endpoints.ts')


class WalletService {
    url: string;
    client: any;
    constructor(client: any) {
        this.url = `${serviceEndpoint}/wallet`;
        this.client = client;
    }

    createTransaction = async(user: string, kind: string, amt: number, reason: string) => {
        const transactionBody = {
            kind: kind,
            amt: amt,
            reason: reason
        };

        const response = await axios.post(`${this.url}/${user}`, transactionBody);
        return response;
    }
}

module.exports = WalletService