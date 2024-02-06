import {
  DataRequestBuilder,
  RadixDappToolkit,
  createLogger,
} from '@radixdlt/radix-dapp-toolkit';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { config } from './config';
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory/Inventory";
import Signin from "./pages/SignIn/SignIn";
import WebGLGame from './pages/WebGLGame';
import { RadixProvider } from './radix/RadixProvider';

function App() {
  const [state, setState] = useState()

  // Initialize Radix Dapp Toolkit in the client
  useEffect(() => {
    const radixDappToolkit = RadixDappToolkit({
      networkId: config.network.networkId,
      dAppDefinitionAddress: config.dAppDefinitionAddress,
      logger: createLogger(2),
    })

    radixDappToolkit.walletApi.setRequestData(
      DataRequestBuilder.accounts().atLeast(1)
    )

    setState(radixDappToolkit)

    return () => {
      radixDappToolkit.destroy()
    }
  }, [])

  return (
    <>
      {state && <RadixProvider value={state}>

        {/* {!hideHeader && <Header />} */}
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/" element={<Signin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/game" element={<WebGLGame />}></Route>
          {/* <Route path="/webGame" element={<Game/>}></Route> */}
        </Routes>
      </RadixProvider>}
    </>
  );
}

export default App;
