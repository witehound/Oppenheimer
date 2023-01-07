import { ITrade } from "./interfaces/trade";
import { getPriceOnUniV2 } from "./price/uniswap/v2/getPrice";
import { getPriceOnUniV3 } from "./price/uniswap/v3/getPrice";
import { findRouterFromProtocol, getBigNumber } from "./utils";
import * as log4js from "log4js";

const errReport = log4js.getLogger("error");

export const findOpp = async (trade: ITrade) => {

  let amountOut = trade.amountIn;
  for (const [i, protocol] of trade.protocols.entries()) {
    switch (protocol) {
      // uniswap v3
      case 0:
        try {
          
          amountOut = await getPriceOnUniV3(
            trade.path[i].address,
            trade.path[i + 1].address,
            amountOut
          );

          // console.log("amountout", amountOut);
          
          break;
        } catch (e) {
          logError(e);
          console.log(e);
          // amountOut = getBigNumber(0);
          break;
        }
      // uniswap v2
      default:
        try {
          amountOut = await getPriceOnUniV2(
            trade.path[i].address,
            trade.path[i + 1].address,
            amountOut,
            findRouterFromProtocol(protocol)
          );
          // console.log("amount", Number(amountOut));
          break;
        } catch (e) {
          logError(e);
          if (e.reason !== "missing revert data in call exception; Transaction reverted without a reason string"){
            console.log("2",e.reason);
          }
          // amountOut = getBigNumber(0);
          break;
        }
    }
  }

  return amountOut;
};

const logError = (e: any) => {
  errReport.warn("Failed to estimate price: ", e?.reason);
};
