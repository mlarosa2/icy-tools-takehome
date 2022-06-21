import { useAddress } from '@thirdweb-dev/react';
import type { NextPage } from 'next'
import Countdown from '../page-components/Countdown/countdown';
import CurrentBlockNumber from '../page-components/CurrentBlockNumber/current-block-number';
import WalletConnection from '../page-components/WalletConnection/wallet-connection';

const Home: NextPage = () => {
  const address = useAddress();

  return (
    <main>
      {
        address
          ? <header>
              <CurrentBlockNumber />
              <Countdown />
            </header>
          : <></>
      }
      {
        <WalletConnection address={address ?? ''} />
      }

    </main>
  )
}

export default Home;
