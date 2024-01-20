import type { AppProps } from "next/app";
import { ThirdwebProvider, embeddedWallet, metamaskWallet, smartWallet, localWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

const personalWallet = embeddedWallet(); // or any other wallet

export const smartWalletConfig = smartWallet(personalWallet, {
  factoryAddress: "0x4E6b6f3dfF9faC105BCC55A48A4c2C8941cfaf97",
  gasless: true,
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThirdwebProvider
      clientId="9421a2b8bea44ad14c4184900860cc94"
      activeChain={activeChain}
      supportedWallets={[smartWalletConfig]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;