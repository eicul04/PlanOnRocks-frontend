import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ClimbingRockService} from "../../core/services/climbing-rock.service";
import {AddClimbingRockDialogComponent} from "../add-climbing-rock-dialog/add-climbing-rock-dialog.component";
import {ClimbingRock} from "../../core/model/entities/climbing-rock.model";
import {HttpClimbingRockService} from "../../core/rest-services/http-climbing-rock.service";
import {Subscription} from "rxjs";
import {ErrorService} from "../../core/services/error.service";

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
export class AddClimbingRockComponent implements OnInit, OnDestroy {
  // TODO declare implicit, Type safety
  name: string | undefined;
  location: string | undefined;
  bolting: string | undefined;
  difficulty: string | undefined;

  constructor(public dialog: MatDialog, private climbingRockService: ClimbingRockService, private httpClimbingRockService: HttpClimbingRockService,
              private errorService: ErrorService) { }

  private subscriptions: Subscription[] = [];

  openDialog() {
    const dialogRef = this.dialog.open(AddClimbingRockDialogComponent, {
      width: '600px',
      data: {name: this.name, location: this.location, bolting: this.bolting, difficulty: this.difficulty},
    });

    dialogRef.afterClosed().subscribe(
      data => this.createClimbingRock(data)
    );
  }

  createClimbingRock(data: any): void {
    const subscription = this.httpClimbingRockService.createClimbingRock(new ClimbingRock(data.location, data.name, data.difficulty, data.bolting))
      .subscribe({
        next: climbingRock => {
          this.climbingRockService.addClimbingRock(climbingRock);
        },
        error: error => {
          this.errorService.handleError(error);
        }
      });
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
