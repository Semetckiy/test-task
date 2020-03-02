import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CowItem } from '../../redux/models/cow-models';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.scss']
})
export class ActionDialogComponent {

  public action: string;
  public localData: any;

  constructor(
    public dialogRef: MatDialogRef<ActionDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.localData = { ...data };
    this.action = this.localData.action;
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.localData });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
