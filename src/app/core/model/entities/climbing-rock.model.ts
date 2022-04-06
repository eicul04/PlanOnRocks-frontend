import {Difficulty} from "../valueObjects/difficulty.enum";
import {Bolting} from "../valueObjects/bolting.enum";

export class ClimbingRock {

  location: string;
  name: string;
  difficulty: Difficulty;
  bolting: Bolting;

  constructor(location: string, name: string, difficulty: Difficulty, bolting: Bolting) {
    this.location = location;
    this.name = name;
    this.difficulty = difficulty;
    this.bolting = bolting;
  }
}
