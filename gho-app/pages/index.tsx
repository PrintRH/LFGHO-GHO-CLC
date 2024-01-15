// pages/index.tsx
import React from 'react';
import { ConnectKitButton } from 'connectkit';
import styles from '../styles/Home.module.css';
import { ConnectWallet } from '@thirdweb-dev/react';


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <ConnectKitButton/>
      <ConnectWallet/>
    </div>
  );
};

export default Home;
