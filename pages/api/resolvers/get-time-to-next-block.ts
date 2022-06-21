import { apiKey } from "../config";

export const getTimeToNextBlock = async (blockId: string) => {
    try {
        return await fetch(`https://api.etherscan.io/api
        ?module=block
        &action=getblockcountdown
        &blockno=${blockId}
        &apikey=${apiKey}`)
    } catch (error) {
        throw error;
    }
};
