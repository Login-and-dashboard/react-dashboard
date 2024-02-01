import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import styles from "./Editing.module.css";

const Editing = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.editContainer}>
        <span className={styles.label}>Edit </span>
        <AiFillEdit className={styles.icon} />
      </div>
      <form action="" className={styles.form} onSubmit={submitHandler}>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.input}
            placeholder="Merritt_Marvin@yahoo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="userName" className={styles.label}>
            Amelie
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            className={styles.input}
            placeholder="Amelie"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <button className={styles.button}>Save</button>
      </form>
    </div>
  );
};

export default Editing;
