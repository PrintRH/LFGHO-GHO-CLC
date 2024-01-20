import { ConnectWallet, Web3Button, embeddedWallet, localWallet, metamaskWallet, smartWallet, useAddress, useConnect, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Image from 'next/image';
import { ACCOUNT_FACTORY_ADDRESS, NFT_CONTRACT_ADDRESS } from "../constants/addresses";
import { useState } from "react";
import Card from "../components/card";
import Nav from "../components/nav";

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
        <Card></Card>
        <Image src="/images/gho1.png" width={467} height={467} className={styles.gho1}></Image>
        <Image src="/images/gho2.png" width={475} height={468} className={styles.gho2}></Image>
      </div>
    </main>
  );
};

export default Home;