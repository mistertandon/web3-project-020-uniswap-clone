import { useState } from "react";
import Image from "next/image";
import images from "./../../assets";
import { SearchToken } from "./../index";

const HeroSection = ({ accounts, tokenData }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setTokensTwo] = useState(false);

  const [tokenOne, setTokenOne] = useState({ name: "", image: "" });
  const [tokenTwo, setTokenTwo] = useState({ name: "", image: "" });
  return (
    <section className="grid grid-cols-12">
      <div className="col-start-4 col-end-7">Swap</div>
      {/* Token One */}
      <div className="col-start-7 col-end-8">
        <Image
          src={images.close}
          alt="Image"
          width={50}
          height={50}
          onClick={() => setOpenSetting(false)}
        />
      </div>
      <div className="col-start-4 col-end-8">
        <input
          type="text"
          placeholder="0"
        />
        <button>
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
      <div className="col-start-4 col-end-8">
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
        </button>
        {tokenTwo.name || "ETH"}
        <small>336k</small>
      </div>
      {/* Account */}
      <div className="col-start-4 col-end-8">
        {accounts ? (
          <button onClick={() => {}}>Connect wallet</button>
        ) : (
          <button onClick={() => {}}>Swap</button>
        )}
      </div>
      <div>
        {openToken && (
          <SearchToken
            openToken={setOpenToken}
            tokens={setTokenOne}
            tokenData={tokenData}
          />
        )}
        {openToken && (
          <SearchToken
            openToken={setOpenToken}
            tokens={setTokenTwo}
            tokenData={tokenData}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
