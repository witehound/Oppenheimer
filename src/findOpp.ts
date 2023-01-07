import { ITrade } from "./interfaces/trade";
import { getPriceOnUniV2 } from "./price/uniswap/v2/getPrice";
import { getPriceOnUniV3 } from "./price/uniswap/v3/getPrice";
import { findRouterFromProtocol, getBigNumber } from "./utils";
import * as log4js from "log4js";

const errReport = log4js.getLogger("error");

export const findOpp = async (trade: ITrade) => {
  let amountOut = trade.amountIn;
  let err: number = 0;
  for (const [i, protocol] of trade.protocols.entries()) {
    switch (protocol) {
      // uniswap v3
      case 0:
        try {
          if (err > 0) {
            amountOut = getBigNumber(0);
            break;
          }
          amountOut = await getPriceOnUniV3(
            trade.path[i].address,
            trade.path[i + 1].address,
            amountOut
          );

          break;
        } catch (e) {
          err++;

          amountOut = getBigNumber(0);
          break;
        }
      // uniswap v2
      default:
        try {
          if (err > 0) {
            amountOut = getBigNumber(0);
            break;
          }
          amountOut = await getPriceOnUniV2(
            trade.path[i].address,
            trade.path[i + 1].address,
            amountOut,
            findRouterFromProtocol(protocol)
          );

          break;
        } catch (e) {
          err++;
          amountOut = getBigNumber(0);
          break;
        }
    }
  }

  if (err > 0) {
    return getBigNumber(0);
  }

  return amountOut;
};

const logError = (e: any) => {
  errReport.warn("Failed to estimate price: ", e?.reason);
};
