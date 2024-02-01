import React from "react";

import { rider } from "../../../images/image";

import styles from "./RadientOnes.module.css";

const RadientOnes = () => {
  return (
    <section className={[styles.wrapper].join(" ")}>
      <div className={styles.header}>
        <img src={rider} alt="#" className={styles.riderImage} />
        <h2 className={styles.title}>Radiant Ones</h2>
      </div>
      <p className={styles.tagline}>
        You have 0 raiders! Get more{" "}
        <a
          href="#/"
          target="_blank"
          rel="noreferrer"
          className={styles.highlight}
        >
          here
        </a>
      </p>
    </section>
  );
};

export default RadientOnes;
