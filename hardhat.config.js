require("hardhat-tracer");
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/d_i2rx_Ia6GaI5sQPI3I7tXhCdwEfTxQ",
      },
    },
  },
};
