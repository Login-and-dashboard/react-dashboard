import React from "react";
import Editing from "../components/Account/Editing";
import Header from "../components/Header/Header";

const Account = () => {
  return (
    <>
    <Header/>
    <div className="mainContainer ">
      <div className="mainWrapper">
        <Editing />
      </div>
    </div>
    </>
  );
};

export default Account;
