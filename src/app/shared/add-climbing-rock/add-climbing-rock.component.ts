import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ClimbingRockService} from "../../core/services/climbing-rock.service";
import {AddClimbingRockDialogComponent} from "../add-climbing-rock-dialog/add-climbing-rock-dialog.component";
import {ClimbingRock} from "../../core/model/entities/climbing-rock.model";

export interface AddClimbingRockDialogData {
  name: string;
  location: string;
  bolting: string;
  difficulty: string;
}

@Component({
  selector: 'app-add-climbing-rock',
  templateUrl: './add-climbing-rock.component.html',
  styleUrls: ['./add-climbing-rock.component.css']
})
export class AddClimbingRockComponent implements OnInit {
  // TODO declare implicit, Type safety
  name: string | undefined;
  location: string | undefined;
  bolting: string | undefined;
  difficulty: string | undefined;

  constructor(public dialog: MatDialog, private climbingRockService: ClimbingRockService) { }

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
