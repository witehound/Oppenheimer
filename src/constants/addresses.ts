export const polyAAVEAddressProvider =
  "0xd05e3E715d945B59290df0ae8eF85c1BdB684744";
export const dex1inch = "0x11111112542D85B3EF69AE05771c2dCCff4fAa26";

export interface IToken {
  symbol: string;
  name: string;
  decimals: number;
  address: string;
  logoURI: string;
}

type erc20Token = { [erc20: string]: IToken };

export const ERC20Token: any = {
  MATIC: {
    symbol: "MATIC",
    name: "MATIC",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI:
      "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
  },
  USDC: {
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    logoURI:
      "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
  },
  USDT: {
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
  },
  DAI: {
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    logoURI:
      "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
  },
  WBTC: {
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    logoURI:
      "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
  },
  LINK: {
    symbol: "LINK",
    name: "ChainLink Token",
    decimals: 18,
    address: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
    logoURI:
      "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png",
  },
  WMATIC: {
    symbol: "WMATIC",
    name: "Wrapped Matic",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
  },
  COMP: {
    symbol: "COMP",
    name: "Compound",
    decimals: 18,
    address: "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
    logoURI:
      "https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png",
  },
  CEL: {
    symbol: "CEL",
    name: "Celsius",
    decimals: 4,
    address: "0xd85d1e945766fea5eda9103f918bd915fbca63e6",
    logoURI:
      "https://tokens.1inch.io/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d.png",
  },
  WETH: {
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    logoURI:
      "https://tokens.1inch.io/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619.png",
  },
  UNI: {
    symbol: "UNI",
    name: "Uniswap",
    decimals: 18,
    address: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    logoURI:
      "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
  },
  AAVE: {
    symbol: "AAVE",
    name: "Aave",
    decimals: 18,
    address: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    logoURI:
      "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
  },
  CRV: {
    symbol: "CRV",
    name: "CRV",
    decimals: 18,
    address: "0x172370d5cd63279efa6d502dab29171933a610af",
    logoURI:
      "https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png",
  },
  QI: {
    symbol: "QI",
    name: "Qi Dao",
    decimals: 18,
    address: "0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    logoURI:
      "https://tokens.1inch.io/0x580a84c73811e1839f75d86d75d88cca0c241ff4.png",
  },
  MANA: {
    symbol: "MANA",
    name: "Decentraland",
    address: "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4",
    decimals: 18,
  },
  GRT: {
    symbol: "GRT",
    name: "The Graph",
    address: "0x5fe2B58c013d7601147DcdD68C143A77499f5531",
    decimals: 18,
  },
  SUSHI: {
    symbol: "SUSHI",
    name: "Sushi",
    address: "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a",
    decimals: 18,
  },
  WOO: {
    symbol: "WOO",
    name: "WOO Network",
    address: "0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603",
    decimals: 18,
  },
};

type PoolMap = { [pair: string]: string };

export const dodoV2Pool: PoolMap = {
  WETH_USDC: "0x5333Eb1E32522F1893B7C9feA3c263807A02d561",
  WMATIC_USDC: "0x10Dd6d8A29D489BEDE472CC1b22dc695c144c5c7",
};

type RouterMap = { [protocol: string]: string };

export const uniswapRouter: RouterMap = {
  POLYGON_UNISWAP_V3: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
  POLYGON_SUSHISWAP: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  POLYGON_QUICKSWAP: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
  POLYGON_APESWAP: "0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607",
  POLYGON_JETSWAP: "0x5C6EC38fb0e2609672BDf628B1fD605A523E5923",
  POLYGON_POLYCAT: "0x94930a328162957FF1dd48900aF67B5439336cBD",
  POLYGON_WAULTSWAP: "0x3a1D87f206D12415f5b0A33E786967680AAb4f6d",
};

export const uniswapBscRouter: RouterMap = {
  BSC_PANCAKESWAP_V2: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
  BSC_SUSHISWAP_V2: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  BSC_MDEX_V2: "0x7DAe51BD3E3376B8c7c4900E9107f12Be3AF1bA8",
  BSC_APESWAP_V2: "0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607",
  BSC_JULSWAP_V2: "0xbd67d157502A23309Db761c41965600c2Ec788b2",
  BSC_BISWAP_V2: "0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8",
};

export const BEP20Token: any = {
  WBNB: {
    symbol: "WBNB",
    name: "Wrapped BNB",
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    decimals: 18,
    chainId: 56,
    logoURI:
      "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png",
    coingeckoId: "wbnb",
  },
  USDD: {
    symbol: "USDD",
    name: "USDD",
    address: "0xd17479997F34dd9156Deef8F95A52D81D265be9c",
    decimals: 18,
    chainId: 56,
    logoURI:
      "https://tokens.1inch.io/0xd17479997f34dd9156deef8f95a52d81d265be9c.png",
  },
  BUSD: {
    symbol: "BUSD",
    name: "Binance USD",
    address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    decimals: 18,
    chainId: 56,
    logoURI:
      "https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png",
  },
  USDT: {
    symbol: "USDT",
    name: "Tether",
    address: "0x55d398326f99059fF775485246999027B3197955",
    decimals: 18,
    chainId: 56,
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
  },
  USDC: {
    symbol: "USDC",
    name: "USD Coin",
    address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    decimals: 18,
    chainId: 56,
    logoURI:
      "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
  },

  CAKE: {
    symbol: "CAKE",
    name: "PancakeSwap",
    address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    decimals: 18,
    chainId: 56,
    logoURI:
      "https://tokens.1inch.io/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png",
  },
  DAI: {
    symbol: "DAI",
    name: "Dai",
    address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    decimals: 18,
    chainId: 56,
    logoURI:
      "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
  },
  TWT: {
    symbol: "TWT",
    name: "Trust Wallet",
    address: "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
    decimals: 18,
    chainId: 56,
    logoURI:
      "https://tokens.1inch.io/0x4b0f1812e5df2a09796481ff14017e6005508003.png",
  },
  FIL: {
    symbol: "FIL",
    name: "Binance Peg Filecoin",
    address: "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153",
    decimals: 18,
    chainId: 56,
    logoURI:
      "https://tokens.1inch.io/0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153.png",
  },
  OPT: {
    symbol: "OPT",
    name: "Optimus OPT",
    address: "0xDFE29AFdF5A7D0bb92A01A56Adabfa87D652E0E7",
    decimals: 9,
    chainId: 56,
    logoURI:
      "https://assets.coingecko.com/coins/images/26318/thumb/OPT_Transparent.png?1657244050",
  },
  SUSHIBA: {
    symbol: "SUSHIBA",
    name: "Sushiba",
    address: "0xa96658cd0D04a8fdCDc30D1156CC65BbFC7591eD",
    decimals: 9,
    chainId: 56,
  },

  UNI: {
    symbol: "UNI",
    name: "Uniswap",
    address: "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
    decimals: 18,
    chainId: 56,
    logoURI:
      "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
  },
  ATOM: {
    symbol: "ATOM",
    name: "Cosmos Hub",
    address: "0x0Eb3a705fc54725037CC9e008bDede697f62F335",
    decimals: 18,
    chainId: 56,
    logoURI:
      "https://tokens.1inch.io/0x0eb3a705fc54725037cc9e008bdede697f62f335.png",
  },
};

export const uniswapEthRouter: RouterMap = {
  ETH_PANCAKESWAP_V2: "0xEfF92A263d31888d860bD50809A8D171709b7b1c",
  ETH_SHUSHISWAP_V2: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
  ETH_UNISWAP_V2: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
};
