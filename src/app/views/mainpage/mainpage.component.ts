import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddClimbingRockDialogComponent} from "../../shared/add-climbing-rock-dialog/add-climbing-rock-dialog.component";
import {ClimbingRock} from "../../core/model/entities/climbing-rock.model";
import {ClimbingRockService} from "../../core/services/climbing-rock.service";

export interface AddClimbingRockDialogData {
  name: string;
  location: string;
  bolting: string;
  difficulty: string;
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  // TODO declare implicit, Type safety
  name: string | undefined;
  location: string | undefined;
  bolting: string | undefined;
  difficulty: string | undefined;

  constructor(public dialog: MatDialog, private climbingRockService: ClimbingRockService) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddClimbingRockDialogComponent, {
      width: '600px',
      data: {name: this.name, location: this.location, bolting: this.bolting, difficulty: this.difficulty},
    });

    dialogRef.afterClosed().subscribe(
      data => this.climbingRockService.addClimbingRock(new ClimbingRock(data.name, data.difficulty, data.bolting))
    );
  }

  ngOnInit(): void {
  }

}
