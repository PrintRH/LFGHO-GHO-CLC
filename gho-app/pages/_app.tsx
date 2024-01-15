import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { WagmiConfig, createConfig, sepolia } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, polygonMumbai } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

import {
  ThirdwebProvider,
} from "@thirdweb-dev/react";

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
    <ThirdwebProvider
      clientId="cd53e0c74ffcf66da0d8098ee483c4fc">
    <WagmiConfig config={config}>
      <ConnectKitProvider debugMode>
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
    </ThirdwebProvider>
  );
}

export default MyApp;