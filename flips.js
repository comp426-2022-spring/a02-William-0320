import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";
const args = minimist(process.argv.slice(2));
args["number"];
const flips = [];
if(args.number == undefined){
    flips = coinFlips(1);
}else{
    const number = args.number;
    flips = coinFlips(number);
}
console.log(flips);
console.log(countFlips(flips))