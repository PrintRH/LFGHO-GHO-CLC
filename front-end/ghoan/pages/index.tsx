import { ConnectWallet, Web3Button, embeddedWallet, localWallet, metamaskWallet, smartWallet, useAddress, useConnect, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { ACCOUNT_FACTORY_ADDRESS, NFT_CONTRACT_ADDRESS } from "../constants/addresses";
import { useState } from "react";

const embeddedWalletConfig = embeddedWallet();

const smartWalletConfig = smartWallet(embeddedWalletConfig, {
  factoryAddress: ACCOUNT_FACTORY_ADDRESS,
  gasless: true,
});

const Home: NextPage = () => {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.centeredContainer}>
        <img src="../public/images/Card.jpg" alt="IMAGE" className={styles.Card}/>
        </div>   
      </div>
    </main>
  );
};

export default Home;