import { useState, useId } from "react";
import images from "./../../assets";

import Image from "next/image";
import { TOGGLE_SWAP_COMPONENT } from "./../index";

const SearchToken = ({ tokens, tokenData, dispatch }) => {
  const [activeToken, setActiveToken] = useState(null);
  const COINS = [
    {
      name: "ETH",
      image: images.ether,
    },
    {
      name: "ETH",
      image: images.ether,
    },
    {
      name: "ETH",
      image: images.ether,
    },
    {
      name: "ETH",
      image: images.ether,
    },
    {
      name: "ETH",
      image: images.ether,
    },
  ];
  return (
    <section className="grid-flow-row grid-cols-12 col-span-full">
      <div className="col-start-4 col-end-8">Select a token</div>
      <div className="col-start-8 col-end-10">
        <Image
          src={images.close}
          alt="image"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={() => dispatch(TOGGLE_SWAP_COMPONENT)}
        />
      </div>
      <div className="col-start-4 col-end-10">
        <Image
          src={images.search}
          alt="search"
          width={20}
          height={20}
        />

        <input
          type="text"
          placeholder="Search name or pass Token address"
        />
      </div>
      <div className="grid grid-cols-12 col-start-4 col-end-10 gap-2 col-span-full">
        {COINS.map(({ name, image: tokenImage }, idx) => {
          const uidRef = useId();
          return (
            <div
              key={uidRef}
              className="col-span-4 row-span-1"
            >
              <p>{name}</p>
              <Image
                src={tokenImage || images.ether}
                width={30}
                height={30}
                alt="Token Image"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SearchToken;
