// components/Card.tsx

import { ConnectEmbed, useAddress, useShowConnectEmbed } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from 'next/image';

const loginOptional = false;

const Card = () => {
  const address = useAddress();
  const showConnectEmbed = useShowConnectEmbed(loginOptional);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.centeredContainer}>
          <div className={styles.cardEmbed}>
            <div className={styles.cardImage}>
              <Image src="/images/cardBig.png" alt="IMAGE" width={412} height={251}  />
              <div className={styles.connectEmbed}>
                {showConnectEmbed ? (
                  <ConnectEmbed
                    auth={{
                      loginOptional: loginOptional,
                    }}
                  />
                ) : (
                  <div className={styles.connectedAddress}>
                   <h1> Connected Wallet :</h1> {address}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
