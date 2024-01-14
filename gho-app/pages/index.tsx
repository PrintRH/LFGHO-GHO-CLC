// pages/index.tsx
import React from 'react';
import { useConnectKit } from 'connectkit';

const Home: React.FC = () => {
  const { connect, disconnect, account } = useConnectKit();

  const handleConnectWallet = async () => {
    try {
      await connect();
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const handleDisconnectWallet = () => {
    disconnect();
  };

  return (
    <div>
      <h1>Connect Wallet Demo</h1>
      {account ? (
        <>
          <p>Connected Account: {account}</p>
          <button onClick={handleDisconnectWallet}>Disconnect Wallet</button>
        </>
      ) : (
        <button onClick={handleConnectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Home;
