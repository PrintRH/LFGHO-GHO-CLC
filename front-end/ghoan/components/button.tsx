import { ConnectWallet, Web3Button, embeddedWallet, localWallet, metamaskWallet, smartWallet, useAddress, useConnect, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Image from 'next/image';
import { ACCOUNT_FACTORY_ADDRESS, NFT_CONTRACT_ADDRESS } from "../constants/addresses";
import { useState } from "react";
const embeddedWalletConfig = embeddedWallet();

interface ButtonProps {
    onClick: () => void;
    label: string;
  }

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
      <button className={styles.box} onClick={onClick}>
        LOGIN
      </button>
    );
  };
  
  export default Button;