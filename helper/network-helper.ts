import {
  ENetwork,
  EHttpProvider,
  EEthNetwork,
  NetworkList,
  DEFAULT_GAS_PRICE,
  DEFAULT_BLOCK_GAS_LIMIT,
  DEFAULT_HARDFORK,
} from './constant';

interface IOptions {
  url: string,
  apiKey: string,
  custom?: (url: string, apiKey: string) => string,
}

const getNetworkConfig = (
  network: ENetwork,
  provider: EHttpProvider,
  opts: IOptions = { url: '', apiKey: '', custom: undefined },
) => {
  const networdDetail = NetworkList[network];
  const { url, apiKey, custom } = opts;
  let httpEndpoint = '';

  if (network in EEthNetwork) {
    switch (provider) {
      case EHttpProvider.alchemy:
        httpEndpoint = `https://eth-${networdDetail.name}.alchemyapi.io/v2/${apiKey}`;
        break;
      case EHttpProvider.infura:
        httpEndpoint = `https://${networdDetail.name}.infura.io/v3/${apiKey}`;
        break;
      case EHttpProvider.custom:
        httpEndpoint = (typeof custom === 'function') ? custom(url, apiKey) : 'invalid';
        break;
      default:
        throw new Error('Unsupported Network');
    }
  } else {
    httpEndpoint = (typeof custom === 'function') ? custom(url, apiKey) : 'invalid';
  }
  return {
    url: httpEndpoint,
    hardfork: DEFAULT_HARDFORK,
    blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
    gasPrice: DEFAULT_GAS_PRICE,
    chainId: networdDetail.chainID,
  };
};

export default getNetworkConfig;
