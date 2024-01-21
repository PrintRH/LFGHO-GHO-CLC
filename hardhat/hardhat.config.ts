import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

const providerApiKey = process.env.ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";
// If not set, it uses the hardhat account 0 private key.
const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY!;
const mainnetFork = process.env.MAINNET_RPC_URL!;
const sepoliaUrl = process.env.SEPOLIA_RPC_URL!;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{version: "0.8.20",}, {version: "0.6.6"}, {version: "0.4.19"}],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },
  defaultNetwork: "localhost",
  namedAccounts: {
    deployer: {
      // By default, it will take the first Hardhat account as the deployer
      default: 0,
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: mainnetFork,
      }
    },
    sepolia: {
      url: sepoliaUrl,
      accounts: [deployerPrivateKey],
      chainId: 11155111,
    }
  }
};

export default config;
