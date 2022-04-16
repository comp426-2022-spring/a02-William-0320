import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";
const args = minimist(process.argv.slice(2));
args["call"];
if(args.call == undefined){
    console.error("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}else if(args.call != "heads" && args.call != "tails"){
    console.error("Usage: node guess-flip --call=[heads|tails]")
}else{
    console.log(flipACoin(args.call));
}