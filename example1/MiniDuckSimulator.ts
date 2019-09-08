import Duck from "./Duck";
import MallardDuck from "./MallardDuck";
import ModelDuck from "./ModelDuck";
import flyRocketPowered from "./FlyBehaviors/FlyRocketPowered";

const mallard: Duck = new MallardDuck();

mallard.performQuack();
mallard.performFly();

const model: Duck = new ModelDuck();

model.performFly();
model.setFlyBehavior(new flyRocketPowered());
model.performFly();
