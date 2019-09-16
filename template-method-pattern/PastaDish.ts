export abstract class PastaDish {
  makeRecipe() {
    this.boilWater();
    this.addPasta();
    this.cookPasta();
    this.drainAndPlate();
    this.addSauce();
    this.addProtein();
    this.addGarnish();
  }

  protected abstract addPasta();
  protected abstract addSauce();
  protected abstract addProtein();
  protected abstract addGarnish();

  private boilWater(){
    console.log("Boiling Water");
  }

  private cookPasta(){
    console.log("Cook Pasta");
  }

  private drainAndPlate(){
    console.log("Drain And Plate pasta");
  }
}
