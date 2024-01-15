import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
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
    chains: [mainnet, polygon, optimism, arbitrum],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId="cd53e0c74ffcf66da0d8098ee483c4fc" locale={en()}
      supportedWallets={[
        smartWallet(
          coinbaseWallet(),
          smartWalletOptions,
        ),
        smartWallet(
          walletConnect(),
          smartWalletOptions,
        ),
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