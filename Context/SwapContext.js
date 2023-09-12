import React, { useState, useEffect, createContext } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";
import { BooTokenAddress, LifeTokenAddress, IWETHAddress } from "./constants";

import ERC20 from "./ERC20.json";
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

  // const addToken = [BooTokenAddress, LifeTokenAddress, IWETHAddress];
  const addToken = [
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0x1befe2d8417e22da2e0432560ef9b2ab68ab75ad",
    "0x04f1A5b9BD82a5020C49975ceAd160E98d8B77Af",
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

      const provider = new ethers.providers.Web3Provider(connection);

      const balance = await provider.getBalance(userAccount);
      const convertedBigInt = BigNumber.from(balance).toString();
      // console.log(balance);
      const convertedEth = ethers.utils.formatEther(convertedBigInt);

      setEther(convertedEth);
      console.log(convertedEth);

      addToken.map(async (token, idx) => {
        const contract = new ethers.Contract(token, ERC20.abi, provider);
        console.log("contract : ", contract);

        const userBalance = await contract.balanceOf(userAccount);
        const tokenLeft = BigNumber.from(userBalance).toString();
        const convertokenBalance = ethers.utils.formatEther(tokenLeft);
        console.log("userBalance : ", userBalance);
        console.log("convertokenBalance : ", convertokenBalance);
      });

      // console.log(getBigInt(balance));
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
