import fs from 'fs';
import path from 'path';
import { ERC20Token, uniswapRouter } from '../constants/addresses';

function getPairsFile() {
    return path.join(__dirname, `../pairs.json`);
  }
  
const formnatRoutes = () => {
    let data = [];
    let tokenHops = [];
  
    for (let key1 in ERC20Token) {
      for (let key2 in ERC20Token) {
        if (key1 !== key2)
          for (let key3 in ERC20Token) {
            if (key2 !== key3) {
              let temp: any[] = [key1, key2, key3];
              tokenHops.push(temp);
            }
          }
      }
    }
  
    const pairsFile = getPairsFile()
  
    fs.writeFileSync(pairsFile, JSON.stringify(tokenHops, null, 2));

    return true
}

export default formnatRoutes

