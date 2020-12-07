import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit {

  email: any;
  driveCheckerRefresh: any;
  percentageBelow: any;

  constructor(public dialogRef: MatDialogRef<SettingsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = true;
    this.email = this.data.email;
    this.driveCheckerRefresh = this.data.driveCheckerRefresh;
    this.percentageBelow = this.data.percentageBelow;
  }

  ngOnInit(): void {
  }

  closeDialog() {
    const data = {
      email: this.email,
      driveCheckerRefresh: this.driveCheckerRefresh,
      percentageBelow: this.percentageBelow
    };

    this.dialogRef.close(data);
  }
}
