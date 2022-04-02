import {Component, OnInit, ViewChild} from '@angular/core';
import {TripCategory} from "../../core/model/valueObjects/tripCategory.enum";
import {Difficulty} from "../../core/model/valueObjects/difficulty.enum";
import {Bolting} from "../../core/model/valueObjects/bolting.enum";
import {MatTable} from "@angular/material/table";
import {ClimbingRockService} from "../../core/services/climbing-rock.service";


export interface ClimbingRockElement {
  name: string;
  tripCategory: TripCategory;
  difficulty: Difficulty;
  bolting: Bolting;
}

@Component({
  selector: 'app-climbing-rock-table',
  templateUrl: './climbing-rock-table.component.html',
  styleUrls: ['./climbing-rock-table.component.css']
})
export class ClimbingRockTableComponent implements OnInit {

  constructor(private climbingRockService: ClimbingRockService) {
  }

  displayedColumns: string[] = ['name', 'tripCategory', 'difficulty', 'bolting'];
  dataSource = this.climbingRockService.climbingRockList$;

  @ViewChild(MatTable) table: MatTable<ClimbingRockElement>;

  ngOnInit(): void {
  }
}
