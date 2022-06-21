import { gql } from "apollo-server-micro";

export const timeToNextBlockTypeDefs = gql`
    type Result {
        CurrentBlock: String
        CountdownBlock: String
        RemainingBlock: String
        EstimateTimeInSec: String
    }
    type TimeToNextBlockResponse {
        status: String
        message: String
        result: Result
    }
    type Query {
        getTimeToNextBlock: TimeToNextBlockResponse
    }
`;
