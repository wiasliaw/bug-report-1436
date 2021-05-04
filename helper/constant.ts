// Network Definition
export type ENetwork = EEthNetwork | EEthL2Network;

export enum EEthNetwork {
  mainnet = 'mainnet',
  ropsten = 'ropsten',
  rinkeby = 'rinkeby',
  goerli = 'goerli',
  kovan = 'kovan',
}

export enum EEthL2Network {
  // polygon: https://docs.matic.network/docs/develop/network-details/network
  matic = 'matic',
  mumbai = 'mumbai',
}

export enum EHardfork {
  byzantium = 'byzantium',
  constantinople = 'constantinople',
  petersburg = 'petersburg',
  istanbul = 'istanbul',
  muirGlacier = 'muirGlacier',
  berlin = 'berlin',
}

export enum EHttpProvider {
  alchemy = 'alchemy',
  custom = 'custom',
  infura = 'infura',
}

// Hardhat Default
export const DEFAULT_BLOCK_GAS_LIMIT = 12500000;
export const DEFAULT_GAS_PRICE = 8000000000;
export const DEFAULT_HARDFORK: EHardfork = EHardfork.berlin;
export const DEFAULT_DERIVEPATH = "m/44'/60'/0'/0";
export const HARDHATEVM_CHAINID = 31337;

// Custom Definition
export type TNetwork = {
  [name: string]: TNetworkArgument,
};

export type TNetworkArgument = {
  name: string,
  chainID: number,
};

export const NetworkList: TNetwork = {
  mainnet: {
    name: 'mainnet',
    chainID: 1,
  },
  ropsten: {
    name: 'ropsten',
    chainID: 3,
  },
  rinkeby: {
    name: 'rinkeby',
    chainID: 4,
  },
  goerli: {
    name: 'goerli',
    chainID: 5,
  },
  kovan: {
    name: 'kovan',
    chainID: 42,
  },
  matic: {
    name: 'matic',
    chainID: 137,
  },
  mumbai: {
    name: 'mumbai',
    chainID: 80001,
  },
};
