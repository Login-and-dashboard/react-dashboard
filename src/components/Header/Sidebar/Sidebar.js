import React from "react";
import { MdSupportAgent } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { BiLogoTwitter, BiLogoDiscordAlt } from "react-icons/bi";

import { NavLink,  } from "react-router-dom";
import { logo } from "../../../images/image";
import styles from "./Sidebar.module.css";

const Sidebar = ({ sidebar, setSidebar }) => {
  const navItems = [
    {
      navItem: "Your Characters",
      to: "/dashboard",
    },
    {
      navItem: "Inventory",
      to: "/inventory",
    },
    {
      navItem: "Game",
      to: "/game",
    },
  ];

  const socialItems = [
    { icon: <LiaBlogSolid />, socialItem: "Blogs", to: "" },
    { icon: <BiLogoTwitter />, socialItem: "Follow Us", to: "" },
    { icon: <BiLogoDiscordAlt />, socialItem: "Join Our Community", to: "" },
  ];

  return (
    <section
      className={[styles.sidebar, sidebar && styles.showSidebar].join(" ")}
    >
      <NavLink to="/" className={styles.logoContainer}>
        <img src={logo} alt="#" className={styles.logo} />
        {/* <h1 className={styles.logoText}>{}</h1> */}
      </NavLink>
      <div className={styles.navContainer}>
        {" "}
        <div className={styles.navItems}>
          {navItems.map((el, i) => (
            <NavLink
              to={el.to}
              key={i}
              className={({ isActive }) =>
                isActive
                  ? [styles.navItem, styles.navActive].join(" ")
                  : styles.navItem
              }
              onClick={() => setSidebar((prev) => !prev)}
            >
              {el.navItem}
            </NavLink>
          ))}
        </div>
        <div className={styles.supportAndSocial}>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive
                ? [styles.navItem, styles.navActive, styles.support].join(" ")
                : [styles.navItem, styles.support].join(" ")
            }
            onClick={() => setSidebar((prev) => !prev)}
          >
            <MdSupportAgent className={styles.icon} />
            <span>Support Center</span>
          </NavLink>
          <div className={styles.navItems}>
            {socialItems.map((el, i) => (
              <NavLink
                target="_blank"
                rel="noreferrer"
                to={el.to}
                key={i}
                className={({ isActive }) =>
                  isActive
                    ? [styles.navItem, styles.navActive].join(" ")
                    : [styles.navItem].join(" ")
                }
                onClick={() => setSidebar((prev) => !prev)}
              >
                <span className={styles.icon}>{el.icon}</span>
                <span>{el.socialItem}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
