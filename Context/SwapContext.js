import React, { useState, useEffect, createContext } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";

import ERC20 from "./ERC20Life.json";
import { IWETHABI } from "./constants";

import {
  checkIfWalletConnected,
  connectWallet,
  connectingWithBooToken,
  connectingWithLifeToken,
  connectingWithSingleSwapToken,
  connectingWithSwapMultiHopToken,
  connectingWithIWETHToken,
} from "./../Utils/appFeatures";

const SwapTokenContext = createContext({});

const SwapTokenContextProvider = ({ children }) => {
  return (
    <SwapTokenContext value={{ tokenName: "Parvesh" }}>
      {children}
    </SwapTokenContext>
  );
};

export default SwapTokenContext;
export { SwapTokenContextProvider };
