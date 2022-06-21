import Connect from "./components/Connect/connect";
import Disconnect from "./components/Disconnect/disconnect";

function WalletConnection({ address }: { address: string }) {
    return (
        <div>
            {
                address
                    ? <p>Currently connected to {address}</p>
                    : <></>
            }
            {
                address
                    ? <Disconnect />
                    : <Connect />
            }
        </div>
    )
}

export default WalletConnection;
