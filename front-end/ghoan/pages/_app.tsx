import type { AppProps } from "next/app";
import { ThirdwebProvider, embeddedWallet, metamaskWallet, smartWallet, localWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ACCOUNT_FACTORY_ADDRESS } from "../constants/addresses";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  const smartWalletConfig = {
    factoryAddress: ACCOUNT_FACTORY_ADDRESS,
    gasless: true,
  }

  return (
    <ThirdwebProvider
      clientId="9516e58d95cc8d72ae67816057f1049c"
      activeChain={activeChain}
      supportedWallets={[
        smartWallet(embeddedWallet(), smartWalletConfig),
        smartWallet(localWallet(), smartWalletConfig),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;