import booToken from "./BooToken.json";
import lifeToken from "./ERC20Life.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";

export const BooTokenAddress = "0x1bEfE2d8417e22Da2E0432560ef9B2aB68Ab75Ad";
export const BooTokenABI = booToken.abi;

export const LifeTokenAddress = "0x04f1A5b9BD82a5020C49975ceAd160E98d8B77Af";
export const LifeTokenABI = lifeToken.abi;

export const SingleSwapTokenAddress =
  "0xde79380FBd39e08150adAA5C6c9dE3146f53029e";
export const SingleSwapTokenABI = singleSwapToken.abi;

export const SwapMultiHopAddress = "0xbFD3c8A956AFB7a9754C951D03C9aDdA7EC5d638";
export const SwapMultiHopABI = swapMultiHop.abi;

export const IWETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const IWETHABI = IWETH.abi;
