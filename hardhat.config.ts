import path from 'path';
import { HardhatUserConfig } from 'hardhat/config';
import {
  DEFAULT_GAS_PRICE,
  DEFAULT_BLOCK_GAS_LIMIT,
  DEFAULT_DERIVEPATH,
  HARDHATEVM_CHAINID,
  getNetworkConfig,
  EEthNetwork,
  EHttpProvider,
} from './helper';

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-typechain';

const MNEMONIC = process.env.MNEMONIC || '';
const INFURA_KEY = process.env.INFURA || '';
// const ALCHEMY_KEY = process.env.ALCHEMY || '';

const config: HardhatUserConfig = {
  // default network
  defaultNetwork: 'hardhat',

  // network config
  networks: {
    hardhat: {
      hardfork: 'istanbul',
      blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
      gas: DEFAULT_BLOCK_GAS_LIMIT,
      gasPrice: DEFAULT_GAS_PRICE,
      chainId: HARDHATEVM_CHAINID,
    },
    mainnet: {
      ...getNetworkConfig(EEthNetwork.mainnet, EHttpProvider.infura, { url: '', apiKey: INFURA_KEY }),
      accounts: {
        mnemonic: MNEMONIC,
        path: DEFAULT_DERIVEPATH,
      },
    },
    ropsten: {
      ...getNetworkConfig(EEthNetwork.ropsten, EHttpProvider.infura, { url: '', apiKey: INFURA_KEY }),
      accounts: {
        mnemonic: MNEMONIC,
        path: DEFAULT_DERIVEPATH,
      },
    },
    rinkeby: {
      ...getNetworkConfig(EEthNetwork.rinkeby, EHttpProvider.infura, { url: '', apiKey: INFURA_KEY }),
      accounts: {
        mnemonic: MNEMONIC,
        path: DEFAULT_DERIVEPATH,
      },
    },
    goerli: {
      ...getNetworkConfig(EEthNetwork.goerli, EHttpProvider.infura, { url: '', apiKey: INFURA_KEY }),
      accounts: {
        mnemonic: MNEMONIC,
        path: DEFAULT_DERIVEPATH,
      },
    },
    kovan: {
      ...getNetworkConfig(EEthNetwork.kovan, EHttpProvider.infura, { url: '', apiKey: INFURA_KEY }),
      accounts: {
        mnemonic: MNEMONIC,
        path: DEFAULT_DERIVEPATH,
      },
    },
  },

  // solidity config
  solidity: {
    compilers: [
      {
        version: '0.7.5',
        settings: {
          optimizer: { enabled: true, runs: 200 },
          evmVersion: 'istanbul',
        },
      },
    ],
  },

  // repository config
  paths: {
    sources: path.resolve(__dirname, 'contracts'),
    tests: path.resolve(__dirname, 'tests'),
    cache: path.resolve(__dirname, 'dist/caches'),
    artifacts: path.resolve(__dirname, 'dist/artifacts'),
  },

  // mocha
  mocha: {
    timeout: 0,
  },

  // type chain
  typechain: {
    outDir: 'dist/types',
    target: 'ethers-v5',
  },
};

export default config;
