import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { WagmiConfig, createConfig, sepolia } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, polygonMumbai } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';


import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  trustWallet,
  zerionWallet,
  bloctoWallet,
  magicLink,
  frameWallet,
  rainbowWallet,
  phantomWallet,
  smartWallet,
  embeddedWallet,
  en,
  localWallet,
} from "@thirdweb-dev/react";

const activeChain = "mumbai";

const smartWalletOptions = {
  factoryAddress: "0x1511d790e8006acaf26b74d2e22febf357f3a4b0",
  gasless: true,
};

const config = createConfig(
  getDefaultConfig({
    appName: 'ConnectKit Next.js demo',
    //infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    //alchemyId:  process.env.NEXT_PUBLIC_ALCHEMY_ID,
    chains: [sepolia],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}
      clientId="9421a2b8bea44ad14c4184900860cc94" locale={en()}
      supportedWallets={[
        smartWallet(
          localWallet(),
          smartWalletOptions,
        ),
        smartWallet(
          embeddedWallet({
            auth: {
              options: [
                "email",
                "google",
                "apple",
                "facebook",
              ],
            },
          }),
          smartWalletOptions,
        ),
      ]}
    >
    <WagmiConfig config={config}>
      <ConnectKitProvider debugMode>
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
    </ThirdwebProvider>
  );
}

export default MyApp;