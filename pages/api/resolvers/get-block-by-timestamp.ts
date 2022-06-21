import { apiKey } from "../config";

export const getBlockByTimestamp = async (timestamp: number) => {
    try {
        return await fetch(`https://api.etherscan.io/api
            ?module=block
            &action=getblocknobytime
            &timestamp=${timestamp}
            &closest=before
            &apikey=${apiKey}`)
    } catch (error) {
        throw error;
    }
}