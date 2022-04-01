import {TripCategory} from "../valueObjects/tripCategory.enum";
import {Difficulty} from "../valueObjects/difficulty.enum";
import {Bolting} from "../valueObjects/bolting.enum";

export class ClimbingRock {

  name: string;
  difficulty: Difficulty;
  bolting: Bolting;

  constructor(name: string, difficulty: Difficulty, bolting: Bolting) {
    this.name = name;
    this.difficulty = difficulty;
    this.bolting = bolting;
  }
}
