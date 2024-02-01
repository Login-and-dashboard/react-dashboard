import React from "react";
import { rider, rider1, rider2, rider3, rider4 } from "../../../images/image";
import styles from "./Radients.module.css";

const Radients = () => {
  const radients = [
    { img: rider1, name: "" },
    { img: rider2, name: "" },
    { img: rider3, name: "" },
    { img: rider4, name: "" },
  ];
  return (
    <div className={styles.allRider}>
      {radients.map((el, i) => (
        <div className={styles.rider} key={i}>
          <img src={el.img} alt="#" className={styles.image} />
          <div className={styles.height}></div>
        </div>
      ))}
    </div>
  );
};

export default Radients;
