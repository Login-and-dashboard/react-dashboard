import React from "react";

import RadientOnes from "../components/Home/RadientOnes/RadientOnes";
import Radients from "../components/Home/Radients/Radients";
import Header from "../components/Header/Header";


function Dashboard() {
  return (
    <>
    <Header/>
      <div className="mainContainer ">
        <div className="mainWrapper">
          {" "}
          <RadientOnes />
          <Radients />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
