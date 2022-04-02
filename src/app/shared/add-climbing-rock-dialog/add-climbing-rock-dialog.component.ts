import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddClimbingRockDialogData} from "../../views/mainpage/mainpage.component";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-climbing-rock-dialog',
  templateUrl: './add-climbing-rock-dialog.component.html',
  styleUrls: ['./add-climbing-rock-dialog.component.css']
})
export class AddClimbingRockDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddClimbingRockDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: AddClimbingRockDialogData,
  ) {}


  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.form.value);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: this.data.name,
      location: this.data.location
    })
  }

}
