import { gql } from "apollo-server-micro";

export const blockByTimestampTypeDefs = gql`
    type BlockByTimestampResponse {
        status: String
        message: String
        result: String
    }
    type Query {
        getBlockByTimestamp: BlockByTimestampResponse
    }
`;
