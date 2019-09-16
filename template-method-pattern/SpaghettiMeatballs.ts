import { PastaDish } from "./PastaDish";

export class SpaghettiMeatballs extends PastaDish {
  addPasta() {
    console.log("Add Spaghetti");
  }  
  
  addSauce() {
    console.log("Add meatballs");
  }
  
  addProtein() {
    console.log("Add tomato sauce");
  }
  
  addGarnish() {
    console.log("Add Parmesan cheese");
  }
}