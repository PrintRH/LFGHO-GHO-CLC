// components/Card.tsx

import { ConnectEmbed } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from 'next/image';

const Card = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.centeredContainer}>
          <div className={styles.cardEmbed}>
            <div className={styles.cardImage}>
              <Image src="/images/Card.png" alt="IMAGE" width={412} height={251} />
            </div>
            <div className={styles.connectEmbed}>
              <ConnectEmbed />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
