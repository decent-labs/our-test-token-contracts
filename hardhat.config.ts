import * as dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";

import "@typechain/hardhat"
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      rinkeby: `privatekey://${process.env.RINKEBY_PK}`,
      mainnet: `privatekey://${process.env.MAINNET_PK}`,
    },
    owner: {
      default: 1,
    },
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.HARDHAT_MAINNET_FORKING_URL || "",
        blockNumber: 12557582,
      },
    },
    mainnet: {
      chainId: 1,
      url: process.env.MAINNET_PROVIDER,
      accounts: [process.env.MAINNET_PK || ""],
    },
    ropsten: {
      chainId: 3,
      url: process.env.ROPSTEN_PROVIDER,
      accounts: [process.env.ROPSTEN_PK || ""],
    },
    rinkeby: {
      chainId: 4,
      url: process.env.RINKEBY_PROVIDER,
      accounts: [process.env.RINKEBY_PK || ""],
    },
    kovan: {
      chainId: 42,
      url: process.env.KOVAN_PROVIDER,
      accounts: [process.env.KOVAN_PK || ""],
    },
  },
};

export default config;
