import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddClimbingRockDialogData} from "../../views/mainpage/mainpage.component";

@Component({
  selector: 'app-add-climbing-rock-dialog',
  templateUrl: './add-climbing-rock-dialog.component.html',
  styleUrls: ['./add-climbing-rock-dialog.component.css']
})
export class AddClimbingRockDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddClimbingRockDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddClimbingRockDialogData,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
