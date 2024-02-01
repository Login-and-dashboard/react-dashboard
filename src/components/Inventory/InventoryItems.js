import React from "react";
import styles from "./Inventory.module.css";
const InventoryItems = () => {
  const items = [
    6,
    2,
    12,
    10,
    3,
    8,
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
    <div>
      <div className={[styles.wrapper, styles.inventoryWrapper].join(" ")}>
        <div className={styles.headingContainer}>
          <h2 className={[styles.heading, styles.inventoryHeading].join(" ")}>
            Inventory
          </h2>
          <h3 className={styles.subHeading}>ITEMS</h3>
        </div>
        <div className={styles.itemsContainer}>
          {items.map((el, i) => (
            <div className={styles.box} key={i}>
              <p className={styles.value}>{el}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cancelContainer}>
        <button className={[styles.cancelButton, styles.button].join(" ")}>
          CONFIRM
        </button>{" "}
      </div>
    </div>
  );
};

export default InventoryItems;
