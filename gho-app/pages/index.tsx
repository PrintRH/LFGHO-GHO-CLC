// pages/index.tsx
import React from 'react';
import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import {
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import MyComponent from './MyComponent';

const config = createConfig({
  chains: [mainnet, polygon, optimism, arbitrum],
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
});

const Home: React.FC = () => {
  return (
    <div>
      <h1>Connect Wallet Demo</h1>
      <ThirdwebProvider clientId="cd53e0c74ffcf66da0d8098ee483c4fc">
        <WagmiConfig config={config}>
          <MyComponent />
        </WagmiConfig>
      </ThirdwebProvider>
    </div>
  );
};

export default Home;