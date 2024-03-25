import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-solpp";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-abi-exporter";

import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// 1. get free ether on https://faucet.egorfine.com/ for ropsten
// 2. Sign up with a fake e-mail on infura.io
// 3. get URL from dashboard
// 4. Export private key from a owned wallet
// 5. Save used wallet address 0xB9434A3b333d84514FEd62631bc0f4158d7BebE9
// 6. Save deployed address: 0xCbBed28766422FE2C4C9Bd26dFe9b820dBfe3F4A
// 7. Use this in Unity3D

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/a660140bc7af4240ba94dd926c1422dc", // sign up to infura.io
      accounts: [
        "0x47e37e904048491180ab204cad890e85622620561ec192433390e403eb8888fd" // export from wallet-address private key
      ],
    },
    hardhat: {
      chainId: 69420
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  abiExporter: {
    path: './abi',
    runOnCompile: true,
    clear: true,
    flat: true,
    pretty: false,
    spacing: 2
  }
};

export default config;
