import fs from "fs";
import path from "path";
import { ERC20Token, uniswapRouter } from "../constants/addresses";
import { getBigNumber } from ".";
import { testedPools } from "../flashloan";
import { BigNumber } from "ethers";

function getPairsFile() {
  return path.join(__dirname, `../../pairs.json`);
}

const formnatRoutes = () => {
  let tokenHops = getFreshRoute();
  let prototocol = getProtocols();

  createTradeRoutes(tokenHops, prototocol);
};

const getFreshRoute = () => {
  let tokenHops = [];

  for (let key1 in ERC20Token) {
    if (key1 === "USDC" || key1 === "WETH" || key1 === "USDT") {
      for (let key2 in ERC20Token) {
        if (key1 !== key2) {
          for (let key3 in ERC20Token) {
            if (key1 === key3) {
              let temp = {
                hop: [ERC20Token[key1], ERC20Token[key2], ERC20Token[key3]],
                decimals: ERC20Token[key1].decimals,
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
  for (let key1 in uniswapRouter) {
    ln++;
  }
  for (let i = 0; i < ln; i++) {
    for (let j = 0; j < ln; j++) {
      if (i !== j) {
        let temp = [i, j];
        tempProtocol.push(temp);
      }
    }
  }

  return tempProtocol;
};

const createTradeRoutes = (tokensHops: any[], protocols: any[]) => {
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

  const pairsFile = getPairsFile();
  fs.writeFileSync(pairsFile, JSON.stringify(trades, null, 2));

  return trades;
};

export async function tryLoadPairs() {
  let pairs: any[] = [];
  let pairsFile = getPairsFile();
  pairs = JSON.parse(fs.readFileSync(pairsFile, "utf-8"));
  return pairs;
}

export default formnatRoutes;
