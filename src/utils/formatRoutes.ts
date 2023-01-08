import fs, { readFile, readFileSync } from "fs";

import path from "path";
import {
  ERC20Token,
  uniswapRouter,
  BEP20Token,
  uniswapEthRouter,
} from "../constants/addresses";
import { getBigNumber } from ".";
import { testedPools } from "../flashloan";
import { BigNumber } from "ethers";

function getPairsFile(pos: any) {
  return path.join(__dirname, `../../${pos}.json`);
}

const formnatRoutes = (chain: string) => {
  let tokenHops = getFreshRoute(chain);
  let prototocol = getProtocols();

  createTradeRoutes(tokenHops, prototocol, "pairs");
};

const getFreshRoute = (chain: string) => {
  let source: any;

  chain === "ERC" ? (source = ERC20Token) : (source = BEP20Token);
  let tokenHops = [];

  for (let key1 in source) {
    if (
      key1 === "USDC" ||
      key1 === "USDT" ||
      key1 === "DAI" ||
      key1 === "MATIC" ||
      key1 === "WETH"
    ) {
      for (let key2 in source) {
        if (key1 !== key2) {
          for (let key3 in source) {
            if (key1 === key3) {
              let temp = {
                hop: [source[key1], source[key2], source[key3]],
                decimals: source[key1].decimals,
              };

              tokenHops.push(temp);
            }
          }
        }
      }
    }
  }

  return tokenHops;
};

const getProtocols = () => {
  let ln = 0;
  let tempProtocol = [];
  for (let key1 in uniswapEthRouter) {
    ln++;
  }
  for (let i = 0; i < ln; i++) {
    for (let j = 0; j < ln; j++) {
      let temp = [i, j];
      tempProtocol.push(temp);
    }
  }

  return tempProtocol;
};

const createTradeRoutes = (tokensHops: any[], protocols: any[], pos: any) => {
  let trades: any[] = [];
  for (let a of tokensHops) {
    for (let b of protocols) {
      let temp = {
        path: a.hop,
        protocols: b,
        amountIn: a.decimals,
      };
      trades.push(temp);
    }
  }

  const pairsFile = getPairsFile(pos);
  fs.writeFileSync(pairsFile, JSON.stringify(trades, null, 2));

  return trades;
};

export async function tryLoadPairs(pos: any) {
  let pairs: any[] = [];
  let pairsFile = getPairsFile(pos);
  pairs = JSON.parse(fs.readFileSync(pairsFile, "utf-8"));
  return pairs;
}

export default formnatRoutes;
