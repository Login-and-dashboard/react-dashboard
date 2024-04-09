import React, { useCallback, useMemo, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { ConnectButton } from "../../components/ConnectButton/ConnectButton";
import { logo } from "../../images/image";
import styles from "./SignIn.module.css";
import { useAccounts } from "../../hooks/useAccounts";
import { useLocation } from "react-router-dom";

const Login = () => {
  const {
    refresh,
    state: { accounts, status, hasLoaded: hasAccountsLoaded },
  } = useAccounts()
  const { search } = useLocation();
  const accessToken = search.substring(7);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  const login = useCallback(async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    const urlencoded = new URLSearchParams();
    urlencoded.append("token", accessToken);
    urlencoded.append("walletAddress", accounts[0].address);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    const res = await fetch("https://snapper-fit-snipe.ngrok-free.app/v1/account/updatenft", requestOptions);
    const text = await res.text();
    if (text.includes("Error")) {
      setError(true);
    } else {
      setLoggedIn(true);
    }
  }, [accessToken, setLoggedIn, accounts])

  return (
    <section className={styles.mainWrapper}>
      <img src={logo} alt="#" className={styles.logo} />

      <h2 className={styles.title}>Sign In</h2>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.walletContainer}>
            {!loggedIn ? <> <ConnectButton />
              {error && <p className={styles.text}>Internal Server Error. Please try another wallet or try again later.</p>}
              {(!accessToken.length) ? <a href="https://radixdlt-nft.s3.amazonaws.com/game/FiatFighterz.zip"><button
                className={[styles.button, styles.connectWallet].join(" ")}
              >
                Download Game
              </button></a> : <></>}
              {(accessToken.length) ? <button
                onClick={() => { login(); }}
                className={[styles.button, styles.connectWallet].join(" ")}
              >
                Login
              </button> : <></>}</> : <p className={styles.text}>
              Logged in success. Please return to your game
            </p>}
          </div>
          <div className={styles.scanAndInfo}>
            <p className={styles.line} />
            <p className={styles.text}>
              Don’t know where to start? Getting Started
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
