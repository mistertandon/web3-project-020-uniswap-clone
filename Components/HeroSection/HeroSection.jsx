import { useState } from "react";
import Image from "next/image";
import images from "./../../assets";
import { SearchToken, Token } from "./../index";

const HeroSection = ({ accounts, tokenData }) => {

  const [openSetting, setOpenSetting] = useState(false);

  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setOpenTokensTwo] = useState(false);

  const [tokenOne, setTokenOne] = useState({ name: "", image: "" });
  const [tokenTwo, setTokenTwo] = useState({ name: "", image: "" });
  return (
    <section className="grid grid-cols-12">
      <div className="col-start-4 col-end-7">Swap</div>
      {/* Token One */}
      <div className="col-start-7 col-end-9">
        <Image
          src={images.close}
          alt="Image"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={() => setOpenSetting(true)}
        />
      </div>
      <div className="col-start-4 col-end-9">
        <input
          type="text"
          placeholder="0"
        />
        <button onClick={() => setOpenToken(true)}>
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
        <button>
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
      <div className="col-span-full">
        {openSetting && <Token setOpenSetting={setOpenSetting} />}
        {openToken && (
          <SearchToken
            openToken={setOpenToken}
            tokens={setTokenOne}
            tokenData={tokenData}
          />
        )}
        {openTokensTwo && (
          <SearchToken
            openToken={setOpenTokensTwo}
            tokens={setTokenTwo}
            tokenData={tokenData}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
