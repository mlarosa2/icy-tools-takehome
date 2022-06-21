import { useMetamask } from "@thirdweb-dev/react";

function Connect() {
    const connectWithMetamask = useMetamask();

    return <button onClick={connectWithMetamask}>Connect Wallet</button>;
}

export default Connect;
