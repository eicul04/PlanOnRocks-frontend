import {Component, OnInit, ViewChild} from '@angular/core';
import {TripCategory} from "../../core/model/valueObjects/tripCategory.enum";
import {Difficulty} from "../../core/model/valueObjects/difficulty.enum";
import {Bolting} from "../../core/model/valueObjects/bolting.enum";
import {MatTable} from "@angular/material/table";


export interface ClimbingRockElement {
  name: string;
  tripCategory: TripCategory;
  difficulty: Difficulty;
  bolting: Bolting;
}

const ELEMENT_DATA: ClimbingRockElement[] = [
  {name: 'Steinbruch Schriesheim', tripCategory: TripCategory.DAY_TRIP, difficulty: Difficulty.EASY, bolting: Bolting.VERY_GOOD},
  {name: 'Finale', tripCategory: TripCategory.VACATION, difficulty: Difficulty.MEDIUM, bolting: Bolting.VERY_GOOD},
];

@Component({
  selector: 'app-climbing-rock-table',
  templateUrl: './climbing-rock-table.component.html',
  styleUrls: ['./climbing-rock-table.component.css']
})
export class ClimbingRockTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'tripCategory', 'difficulty', 'bolting'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<ClimbingRockElement>;

  ngOnInit(): void {
  }


  // Methode muss von Speichern Button im climbing-rock-dialog component aufgerufen werden
  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

}