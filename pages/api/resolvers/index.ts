import { getBlockByTimestamp } from "./get-block-by-timestamp";
import { getTimeToNextBlock } from "./get-time-to-next-block";

export const resolvers = {
    Query: {
        getBlockByTimestamp,
        getTimeToNextBlock,
    }
};
