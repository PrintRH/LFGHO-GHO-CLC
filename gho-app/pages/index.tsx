// pages/index.tsx
import React from 'react';
import { ConnectKitButton } from 'connectkit';


const Home: React.FC = () => {
  return (
    <div>
      <h1>Connect Wallet Demo</h1>
      <ConnectKitButton/>
    </div>
  );
};

export default Home;
