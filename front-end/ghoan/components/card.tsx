import { ConnectEmbed, Web3Button, embeddedWallet, localWallet, metamaskWallet, smartWallet, useAddress, useConnect, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Image from 'next/image';
import { useState } from "react";
import Button from "./button";


const Card: NextPage = () => {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.centeredContainer}>
          <div className={styles.cardEmbed}>
          

        <Image src="/images/Card.png" alt="IMAGE" width={412} height={251}/>
        {/*<Image src="/images/Email.png" width={261} height={31} className={styles.email} alt={""}/>
        <input className={styles.emailtag}></input>
        <Button onClick={function (): void {
            throw new Error("Function not implemented.");
          } } label={""}/>*/}
           <ConnectEmbed />
          </div>
        </div>   
      </div>
    </main>
  );
};

export default Card;