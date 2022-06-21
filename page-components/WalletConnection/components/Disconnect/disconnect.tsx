import { useDisconnect } from "@thirdweb-dev/react";

function Disconnect() {
    const disconnectWallet = useDisconnect();

    return <button onClick={disconnectWallet}>Disconnect Wallet</button>;
}

export default Disconnect;
