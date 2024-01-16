import { ConnectWallet, Web3Button, embeddedWallet, localWallet, metamaskWallet, smartWallet, useAddress, useConnect, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Image from 'next/image';
import { ACCOUNT_FACTORY_ADDRESS, NFT_CONTRACT_ADDRESS } from "../constants/addresses";
import { useState } from "react";
import Button from "./button";
const embeddedWalletConfig = embeddedWallet();

const smartWalletConfig = smartWallet(embeddedWalletConfig, {
  factoryAddress: ACCOUNT_FACTORY_ADDRESS,
  gasless: true,
});

const Nav: NextPage = () => {

  return (
    <main className={styles.main}>
    <div className={styles.navbox}>
        <div className={styles.rectangle} />
        <Image src="/images/Logo.png" alt="IMAGE" width={183} height={60} className={styles.logo1}/>
    <div className={styles.navtitle}>
        <div className={styles.nav1}>Home</div>
        <div className={styles.nav2}>Get a Loan</div>
        <div className={styles.nav3}>About Us</div>
    </div>
    </div>
    </main>
  );
};

export default Nav;