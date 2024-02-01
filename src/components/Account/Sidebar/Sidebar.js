import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { logo, user } from "../../../images/image";
import styles from "./Sidebar.module.css";

const AccountSidebar = ({ sidebar, setSidebar }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
    setPreviewImage(URL.createObjectURL(image));
  };

  return (
    <section
      className={[styles.sidebar, sidebar && styles.showSidebar].join(" ")}
    >
      <NavLink to="/" className={styles.logoContainer}>
        <img src={logo} alt="#" className={styles.logo} />
      </NavLink>

      <div>
        <div className={styles.userContainer}>
          <img
            src={previewImage ? previewImage : user}
            alt="#"
            className={styles.user}
          />

          <input
            id="imageInput"
            type="file"
            accept="image/*"
            className={styles.imageInput}
            onChange={handleImageChange}
          />
          <label htmlFor="imageInput" className={styles.imageUpload}>
            <FaRegEdit
              className={[styles.icon, styles.imageUploadIcon].join(" ")}
            />
          </label>
        </div>
        <p className={styles.name}>Hector Schulist</p>
      </div>
      <p className={styles.navItem} onClick={() => setSidebar((prev) => !prev)}>
        <BiSolidUser className={styles.icon} />
        <span>My Profile</span>
        <AiFillCaretRight
          className={[styles.icon, styles.rightIcon].join(" ")}
        />
      </p>
    </section>
  );
};

export default AccountSidebar;
