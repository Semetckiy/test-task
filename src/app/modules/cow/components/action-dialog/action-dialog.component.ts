import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.scss']
})
export class ActionDialogComponent {

  public action: string;
  public localData: any;
  public cowForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ActionDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data,
    private readonly formBuilder: FormBuilder,
  ) {
    this.localData = { ...data };
    this.action = this.localData.action;
    if (this.action === 'Update' || this.action === 'Add') {
      this.createFormGroup(this.localData);
    }
  }

  doAction() {
    if (this.action === 'Update' || this.action === 'Add') {
      if (this.cowForm.valid) {
        this.dialogRef.close({event: this.action, data: this.cowForm.value});
      }
    } else {
      this.dialogRef.close({event: this.action, data: this.localData});
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  private createFormGroup(data) {
    console.log(data);
    this.cowForm = this.formBuilder.group({
      cowId: [data.cowId || 0, [Validators.required]],
      healthIndex: [data.healthIndex || '', [Validators.required]],
      endDate: [data.endDate || '', [Validators.required]],
      minValueDateTime: [data.minValueDateTime || '', [Validators.required]],
      type: [data.type || '', [Validators.required]],
      animalId: [data.animalId || '', [Validators.required]],
      eventId: [data.eventId || '', [Validators.required]],
      deletable: [data.deletable || false, [Validators.required]],
      lactationNumber: [data.lactationNumber || '', [Validators.required]],
      daysInLactation: [data.daysInLactation || '', [Validators.required]],
      ageInDays: [data.ageInDays || '', [Validators.required]],
      startDateTime: [data.startDateTime || '', [Validators.required]],
      reportingDateTime: [data.reportingDateTime || '', [Validators.required]]
    });
    this.cowForm.markAsTouched();
  }

}
