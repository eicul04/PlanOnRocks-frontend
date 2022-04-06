import {Difficulty} from "../valueObjects/difficulty.enum";
import {Bolting} from "../valueObjects/bolting.enum";
import {Location} from "../valueObjects/location.model"

export class ClimbingRock {

  location: Location;
  name: string;
  difficulty: Difficulty;
  bolting: Bolting;

  constructor(location: Location, name: string, difficulty: Difficulty, bolting: Bolting) {
    this.location = location;
    this.name = name;
    this.difficulty = difficulty;
    this.bolting = bolting;
  }
}
