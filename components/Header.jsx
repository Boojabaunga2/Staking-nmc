import { sepolia,ethereum,polygonAmoy,Goerli, mumbai, polygon } from "thirdweb/chains";

import { useActiveAccount,useDisconnect,useSwitchActiveWalletChain,useActiveWalletChain,ConnectButton } from "thirdweb/react";
import { createThirdwebClient} from "thirdweb";
import { createWallet,inAppWallet } from "thirdweb/wallets";


import Link from "next/link";
import styles from "./Navbar.module.css";
import { chain } from "../const/exports";

export default function Header() {
  const account = useActiveAccount();
  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    inAppWallet({
      providers: ["email", "phone"],
    })


  ];
  const client = createThirdwebClient({ 
    clientId: "f0f1caab80bb91af043abe5c9e65eb08"
   });
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          {/* <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
           Home
          </Link> */}

          <div className={styles.navMiddle}>
            {/* <Link href="/buy" className={styles.link}>
              Buy
            </Link>
            <Link href="/sell" className={styles.link}>
              Sell
            </Link> */}

            {account?.address === '0xd755085F7cC22920b327A5d7Ad9234073dc89379' || account?.address ==='0x4eeB0C7D7b369Afae101e1D1fb759D6d65342495' || account?.address ==='0x65d5e12dcB550C0792dF2A70D016493C0cB81512' && (
              <>
            {/* <Link href="/mint" className={styles.link}>
              Mint Tokens
            </Link>
            <Link href="/factory" className={styles.link}>
            Elements Factory
            </Link> */}

            </>
              )}
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
          <ConnectButton client={client} wallets={wallets} chain={chain}
            
            
            
            />
          </div>
          {/* {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )} */}
        </div>
      </nav>
    </div>
  );
}
