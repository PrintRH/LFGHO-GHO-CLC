import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.navbox}>
        <div className={styles.rectangle} />
        <Image src="/images/Logo.png" alt="IMAGE" width={183} height={60} className={styles.logo1} />
        <div className={styles.navtitle}>
          <Link className={styles.nav1} href="/">
            HOME
          </Link>
          <div className={styles.dropdownContainer}>
            <Link className={styles.nav2} href="/Loanpage">
              LOAN<span className={styles.chevron}>&#9660;</span>
            </Link>
            <div className={styles.dropdownContent}>
            <Link href="/Loanpage">1</Link>
              <Link href="/Loanpage">2</Link>
              {/* Add more dropdown items as needed */}
            </div>  
          </div>
          <Link className={styles.nav3} href="/Cards">
            CARD
          </Link>
          <button className={styles.box1}>Connect Wallet</button>
        </div>
      </div>
    </main>
  );
};

export default Nav;
