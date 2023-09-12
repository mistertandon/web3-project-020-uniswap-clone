import React, { useState, useEffect, createContext } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";
import { BooTokenAddress, LifeTokenAddress, IWETHAddress } from "./constants";

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
  const [account, setAccount] = useState("");
  const [ether, setEther] = useState("");
  const [networkConnected, setNetworkConnected] = useState("");
  const [weth9, setWeth9] = useState("");
  const [dai, setDai] = useState("");
  const [tokenData, setTokenData] = useState([]);

  const addToken = [
    BooTokenAddress.toString(),
    LifeTokenAddress.toString(),
    IWETHAddress.toString(),
  ];

  const fetchingData = async () => {
    try {
      // Get User Account
      const userAccount = await checkIfWalletConnected();
      setAccount(userAccount);

      // Create provider
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      console.log("connection", connection);
      console.log("ethers", ethers);

      const provider = new ethers.BrowserProvider(connection);

      const balance = await provider.getBalance(userAccount);
      console.log(balance);
    } catch (error) {
      console.log("An error occured", error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <SwapTokenContext.Provider value={{ tokenName: "Parvesh" }}>
      {children}
    </SwapTokenContext.Provider>
  );
};

export { SwapTokenContext as default, SwapTokenContextProvider };
