import { useState, useReducer } from "react";
import Image from "next/image";
import images from "./../../assets";
import {
  TOGGLE_TOKEN_COMPONENT,
  TOGGLE_SEARCH_TOKEN_A,
  TOGGLE_SEARCH_TOKEN_B,
} from "./HeroSection.constant";

import { SearchToken, Token } from "./../index";

const componentVisibility = (state, action) => {
  let _state;
  switch (action) {
    case TOGGLE_TOKEN_COMPONENT:
      _state = {
        swapComponent: false,
        TokenComponent: true,
        tokenAComponent: false,
        tokenBComponent: false,
      };
      break;

    case TOGGLE_SEARCH_TOKEN_A:
      _state = {
        swapComponent: false,
        TokenComponent: false,
        tokenAComponent: true,
        tokenBComponent: false,
      };
      break;

    case TOGGLE_SEARCH_TOKEN_B:
      _state = {
        swapComponent: false,
        TokenComponent: false,
        tokenAComponent: false,
        tokenBComponent: true,
      };
      break;

    default:
      _state = {
        swapComponent: true,
        TokenComponent: false,
        tokenAComponent: false,
        tokenBComponent: false,
      };
  }

  return _state;
};

const HeroSection = ({ accounts, tokenData }) => {

  const [visibilityStatus, dispatch] = useReducer(componentVisibility, {
    swapComponent: true,
    TokenComponent: false,
    tokenAComponent: false,
    tokenBComponent: false,
  });

  const [tokenOne, setTokenOne] = useState({ name: "", image: "" });

  const [tokenTwo, setTokenTwo] = useState({ name: "", image: "" });

  return (
    <section className="grid grid-cols-12">
      {visibilityStatus["swapComponent"] && (
        <>
          <div className="col-start-4 col-end-7">Swap</div>
          {/* Token One */}
          <div className="col-start-7 col-end-9">
            <Image
              src={images.close}
              alt="Image"
              width={50}
              height={50}
              className="cursor-pointer"
              onClick={() => dispatch(TOGGLE_TOKEN_COMPONENT)}
            />
          </div>
          <div className="col-start-4 col-end-9">
            <input
              type="text"
              placeholder="0"
            />
            <button onClick={() => dispatch(TOGGLE_SEARCH_TOKEN_A)}>
              <Image
                src={tokenOne.image || images.etherlogo}
                height={20}
                width={20}
                alt="ether"
              />
              {tokenOne.name || "ETH"}
              <small>336k</small>
            </button>
          </div>
          {/* Token Two */}
          <div className="col-start-4 col-end-9">
            <input
              type="text"
              placeholder="0"
            />
            <button onClick={() => dispatch(TOGGLE_SEARCH_TOKEN_B)}>
              <Image
                src={tokenTwo.image || images.etherlogo}
                alt="Token two"
                width={20}
                height={20}
              />
              {tokenTwo.name || "ETH"}
              <small>336k</small>
            </button>
          </div>
          {/* Account */}
          <div className="col-start-4 col-end-9">
            {accounts ? (
              <button onClick={() => {}}>Connect wallet</button>
            ) : (
              <button onClick={() => {}}>-</button>
            )}
          </div>
        </>
      )}
      {visibilityStatus["TokenComponent"] && <Token dispatch={dispatch} />}
      <div className="col-span-full">
        {visibilityStatus["tokenAComponent"] && (
          <SearchToken
            tokens={setTokenOne}
            tokenData={tokenData}
            dispatch={dispatch}
          />
        )}
        {visibilityStatus["tokenBComponent"] && (
          <SearchToken
            tokens={setTokenTwo}
            tokenData={tokenData}
            dispatch={dispatch}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
