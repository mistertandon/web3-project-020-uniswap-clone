import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import images from "./../../assets";
import { Modal, TokenList } from "./../index";
const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/",
    },
    {
      name: "Pools",
      link: "/",
    },
  ];

  const [openModal, setOpenModal] = useState(false);

  const [openTokenBox, setOpenTokenBox] = useState(false);

  return (
    <section class="grid w-11/12 mx-auto grid-cols-3">
      <div class="flex flex-row justify-around items-center">
        <Image
          src={images.uniswap}
          alt="logo"
          height={50}
          width={50}
        />

        <div class="flex flex-row gap-x-3 justify-evenly">
          {menuItems.map(({ name, link }, idx) => {
            return (
              <Link
                class="text-[#cff80b]"
                key={`${name}_${idx}`}
                href={{ pathname: `${name}`, query: `${link}` }}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
      <div class="bg-[#1e1e1e] flex flex-row justify-center px-1">
        <Image
          src={images.search}
          alt="search"
          class="h-[20px] w-[20px]"
        />
        <input
          class="bg-transparent outline-none"
          type="text"
          placeholder="Search Token"
        />
      </div>
      <div>
        <div>
          <Image
            src={images.ether}
            alt="network"
            width={30}
            height={30}
          />
          <p>Network Name</p>
        </div>
        <div>
          <button onClick={() => {}}>Address</button>
          {openModal && (
            <Modal
              setOpenModal={setOpenModal}
              connectWallet="Connect"
            />
          )}
        </div>
        {/* TokenList component */}
        {openTokenBox && (
          <TokenList
            tokenDate="hey"
            setOpenTokenBox={setOpenTokenBox}
          />
        )}
      </div>
    </section>
  );
};

export default NavBar;
