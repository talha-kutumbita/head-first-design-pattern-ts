import { PastaDish } from "./PastaDish";
import { PenneAlfredo } from "./PenneAlfredo";
import { SpaghettiMeatballs } from "./SpaghettiMeatballs";

const penneAlfredo:PastaDish = new PenneAlfredo();
console.log("----------Making Alfredo-----------");
penneAlfredo.makeRecipe();

const spaghettiMeatBalls:PastaDish = new SpaghettiMeatballs();
console.log();
console.log("----------Making Spaghetti Meat Balls-----------");
spaghettiMeatBalls.makeRecipe();