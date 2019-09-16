import { PastaDish } from "./PastaDish";

export class PenneAlfredo extends PastaDish {
  protected addPasta() {
    console.log("Add Penne");
  }

  protected addSauce() {
    console.log("Add Chicken");
  }

  protected addProtein() {
    console.log("Add Alfredo sauce");
  }

  protected addGarnish() {
    console.log("Add parsley");
  }
}
