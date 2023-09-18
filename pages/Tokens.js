import React, { useState } from "react";
import Image from "next/image";
import { TokenGrid } from "./../Components";

const Tokens = () => {
  const [tokenList, setTokenList] = useState([
    {
      number: 1,
      //image: images.etherlogo,
      name: "Ether",
      symbol: "ETH",
      price: "$1616",
      change: "+ 50.4",
      tvl: "$4468 M",
      volume: "$488 M",
    },
    {
      number: 2,
      //image: images.etherlogo,
      name: "USDC Coin",
      symbol: "USDC",
      price: "$1616",
      change: "+ 50.4",
      tvl: "$4468 M",
      volume: "$488 M",
    },
    {
      number: 1,
      //image: images.etherlogo,
      name: "Wrapped BTC",
      symbol: "WBTC",
      price: "$1616",
      change: "+ 50.4",
      tvl: "$4468 M",
      volume: "$488 M",
    },
    {
      number: 1,
      //image: images.etherlogo,
      name: "Uniswap",
      symbol: "UNI",
      price: "$12,345",
      change: "+ 50.4",
      tvl: "$4468 M",
      volume: "$488 M",
    },
  ]);

  const [tokenListRef] = useState(tokenList);

  const [search, setSearch] = useState("");

  const [searchItem, setSearchItem] = useState(search);

  const searchHandler = (event) => {
    let {
      target: { value: searchKey },
    } = event;

    searchKey = searchKey.trim();

    if (searchKey) {
      const filteredTokens = tokenListRef.filter(({ name }) => {
        return name.toLowerCase().includes(searchKey.toLowerCase());
      });

      setTokenList(filteredTokens);
    } else {
      setTokenList(tokenListRef);
    }
  };

  return (
    <section>
      <section>
        <div>Ethereum</div>
        <div>
          <input
            placeholder="Search Token"
            onChange={(event) => searchHandler(event)}
          />
        </div>
      </section>
      <TokenGrid
        tokens={tokenList}
        headerList={["image", "name", "symbol", "price", "change", "tvl"]}
      />
    </section>
  );
};

export { Tokens as default };
