import React from "react";
import styles from "./Inventory.module.css";
const DismentaItems = () => {
  const items = [
    6,
    2,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingContainer}>
        {" "}
        <h2 className={styles.heading}>Dismantle</h2>
        <h3 className={styles.subHeading}>ITEMS</h3>
      </div>
      <div className={styles.itemsContainer}>
        {items.map((el, i) => (
          <div className={styles.box} key={i}>
            <p className={styles.value}>{el}</p>
          </div>
        ))}
      </div>

      <div className={styles.amountAndconfirm}>
        {" "}
        <h3 className={styles.subHeading}>EXCHANGE FOR</h3>{" "}
        <h3 className={styles.amount}>400 C </h3>
        <button className={[styles.confirmButton, styles.button].join(" ")}>
          CONFIRM
        </button>
      </div>
    </div>
  );
};

export default DismentaItems;
