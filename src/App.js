import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Signin from "./pages/SignIn/SignIn";
import Inventory from "./pages/Inventory/Inventory";
import Account from "./pages/Account";
import Web from "./pages/Web";
import Dashboard from "./pages/Dashboard";
import WebGLGame from './pages/WebGLGame';
import Game from './pages/Game';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const hideHeader = location.pathname === "/signin";

  return (
    <>
      {/* {!hideHeader && <Header />} */}
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/game" element={<WebGLGame/>}></Route>
        {/* <Route path="/webGame" element={<Game/>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
