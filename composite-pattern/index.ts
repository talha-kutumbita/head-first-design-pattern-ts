import { Housing } from "./Housing";
import { Room } from "./Room";
import { IStructure } from "./IStructure";

const building: Housing = new Housing("123 Street");
const floor1: Housing = new Housing("123 Street - First Floor");
const firstFloor = building.addStructure(floor1);

const washRoom1m: Room = new Room(`1F Men's Washroom`);
const washRoom1f: Room = new Room(`1F Women's Washroom`);
const common1: Room = new Room(`1F common area`);

const firstMens = floor1.addStructure(washRoom1m);
const firstWomans = floor1.addStructure(washRoom1f);
const firstCommon = floor1.addStructure(common1);

building.enter();
const currentFloor = <Housing>building.getStructure(firstFloor);
currentFloor.enter();
const currentRoom = currentFloor.getStructure(firstMens);
currentRoom.enter();
