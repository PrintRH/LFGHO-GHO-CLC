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
              <Image src="/images/cardBig.png" alt="IMAGE" width={412*1.7} height={251*1.7}  style={{ marginLeft: '-170px' ,marginTop:'-40px'}} />
              <div className={styles.connectEmbed}>
                {showConnectEmbed ? (
                  <ConnectEmbed
                    auth={{
                      loginOptional: loginOptional,
                    }}
                  />
                ) : (
                  <div className={styles.connectedAddress}>
                   <h1>KABIX.ETH</h1> ACCOUNT HOLDER
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
