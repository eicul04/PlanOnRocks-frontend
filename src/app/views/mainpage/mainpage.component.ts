import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddClimbingRockDialogComponent} from "../../shared/add-climbing-rock-dialog/add-climbing-rock-dialog.component";

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
  // TODO declarate implicit, Type safety
  name: string | undefined;
  location: string | undefined;
  bolting: string | undefined;
  difficulty: string | undefined;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddClimbingRockDialogComponent, {
      // width: '250px',
      data: {name: this.name, location: this.location, bolting: this.bolting, difficulty: this.difficulty},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed`);
      this.name = result;
    });
  }

  ngOnInit(): void {
  }

}
