## Did you finish everything you wanted to? If not, what would you do if you spent another hour or two working on this?
    No, given some more time, I would have learned how to get a block number from metamask, created the countdown timer, wrote some tests
    and styled the components. Being unfamiliar with web3, I found it difficult to quickly search for what I needed to get block information.
    I used the ThirdWeb library to quickly connect to metamask, and had hoped it would provide a more robust API. My workaround was to fetch
    the block information by a timestamp using Etherscan.

## If this simple site suddenly started getting 1000s of users always active, how would you optimize the backend so you aren’t making 1000s of redundant calls to Etherscan?
    I would create a server to fetch the time to next block and save a timestamp for when the next block is ready. Then a client can request that timestamp and calculate how much time is left. Also on the server I would start a timer so that when the timer runs out, the next timestamp can be fetched.