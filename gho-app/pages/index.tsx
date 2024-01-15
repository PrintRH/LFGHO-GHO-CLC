// pages/index.tsx
import React from 'react';
import { ConnectKitButton } from 'connectkit';
import '../styles/Home.module.css'


const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>Connect Wallet Demo</h1>
      <ConnectKitButton/>
    </div>
  );
};

export default Home;
