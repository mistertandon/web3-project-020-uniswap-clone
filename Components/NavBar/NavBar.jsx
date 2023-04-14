import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import images from "./../../assets";
import { Modal, TokenList } from "./../index";
const NavBar = () => {
  const menuItems = [
    { name: "Swap", link: "/" },
    { name: "Tokens", link: "/" },
    { name: "Pools", link: "/" },
  ];

  const [openModal, setOpenModal] = useState(false);

  const [openTokenBox, setOpenTokenBox] = useState(false);

  return (
    <section className="grid w-11/12 h-20 grid-cols-3 mx-auto mt-4">
      <div className="flex flex-row items-start pt-1 h-13 w-fit gap-x-4">
        <Image
          src={images.uniswap}
          className="mr-4"
          alt="logo"
          height={50}
          width={50}
        />

        <div className="flex flex-row gap-x-2 justify-evenly">
          {menuItems.map(({ name, link }, idx) => {
            return (
              <Link
                className="text-[#cff80b]"
                key={`${name}_${idx}`}
                href={{ pathname: `${name}`, query: `${link}` }}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="bg-[#1e1e1e] flex flex-row justify-center items-center h-10 gap-x-2 w-fit border-white rounded-2xl">
        <Image
          src={images.search}
          alt="search"
          className="h-[20px] w-[20px]"
        />
        <input
          className="text-base text-white bg-transparent border-none outline-none color-[#CFF80B]"
          type="text"
          placeholder="Search Token"
        />
      </div>
      <div className="flex flex-row items-start justify-between h-13 w-fit gap-x-4">
        <div className="flex flex-row items-start gap-x-2">
          <Image
            src={images.ether}
            alt="network"
            width={30}
            height={30}
          />
          <p className="pt-1 m-0">Network Name</p>
        </div>
        <div className="pt-1">
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
