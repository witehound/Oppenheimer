import fs from "fs";
import path from "path";
import { ERC20Token, uniswapRouter } from "../constants/addresses";
import { getBigNumber } from ".";
import { testedPools } from "../flashloan";

function getPairsFile() {
  return path.join(__dirname, `../../pairs.json`);
}

const formnatRoutes = () => {
  let data = [];
  let amountIn = getBigNumber(20000, ERC20Token.USDC.decimals);
  let tokenHops = getFreshRoute();
  let prototocol = getProtocols();

  createTradeRoutes(tokenHops,prototocol,amountIn)
};

const getFreshRoute = () => {
  let tokenHops = [];

  for (let key1 in ERC20Token) {
    if (testedPools[key1] != undefined) {
      for (let key2 in ERC20Token) {
        if (key1 !== key2)
          for (let key3 in ERC20Token) {
            if (key1 === key3) {
              let temp: any[] = [
                ERC20Token[key1].address,
                ERC20Token[key2].address,
                ERC20Token[key3].address,
              ];
              tokenHops.push(temp);
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

const createTradeRoutes = (
  tokensHops: any[],
  protocols: any[],
  amountIn: any
) => {
  let trades: any[] = [];
  for (let a of tokensHops) {
    for (let b of protocols) {
      let temp = {
        path: a,
        protocols: b,
        amountIn,
      };
      trades.push(temp);
    }
  }

  const pairsFile = getPairsFile();
  fs.writeFileSync(pairsFile, JSON.stringify(trades, null, 2));

  return trades;
};

export default formnatRoutes;
