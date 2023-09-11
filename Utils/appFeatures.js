import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  BooTokenAddress,
  BooTokenABI,
  LifeTokenAddress,
  LifeTokenABI,
  SingleSwapTokenAddress,
  SingleSwapTokenABI,
  SwapMultiHopAddress,
  SwapMultiHopABI,
  IWETHAddress,
  IWETHABI,
} from "./../Context/constants";

// Check if wallet is connected or not
export const checkIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask");

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const firstAccount = accounts[0];

    return firstAccount;
  } catch (error) {
    console.log("An error occured", error);
  }
};

// Connect wallet
export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install metamask");
    const accounts = await waindow.ethereum.request({
      method: "eth_requestAccounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log("An error occurred", error);
  }
};
