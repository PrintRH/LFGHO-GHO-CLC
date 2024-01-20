import { ConnectWallet, Web3Button, embeddedWallet, localWallet, metamaskWallet, smartWallet, useAddress, useConnect, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Image from 'next/image';
import { ACCOUNT_FACTORY_ADDRESS, NFT_CONTRACT_ADDRESS } from "../constants/addresses";
import { useState } from "react";
import Card from "../components/card";
import Nav from "../components/nav";
import Cardcomponent from "../components/cardcomponent";

const embeddedWalletConfig = embeddedWallet();

const smartWalletConfig = smartWallet(embeddedWalletConfig, {
  factoryAddress: ACCOUNT_FACTORY_ADDRESS,
  gasless: true,
});

const Home: NextPage = () => {

  return (
    <main className={styles.main}>
      <Nav/>
      <div className={styles.container}>
        <Cardcomponent></Cardcomponent>
      </div>
    </main>
  );
};

export default Home;