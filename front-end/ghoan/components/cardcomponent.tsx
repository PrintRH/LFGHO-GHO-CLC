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

const Cardcomponent: NextPage = () => {
  const imageStyle: React.CSSProperties = {
    transform: 'rotate(10deg)',
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.centeredContainer1}>
        <Image src="/images/fullcard1.png" alt="IMAGE" width={504.22} height={452.73} style={imageStyle}/>
        <div className={styles.flexbutton}>
        <button className={styles.cancel}>
        Cancel
        </button>
        <button className={styles.cancel}>
        Mint  
        </button>
        </div>
        </div>           
      </div>
    </main>
  );
};

export default Cardcomponent;