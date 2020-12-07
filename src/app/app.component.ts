import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {backendUrls} from '../environments/environment';
import {MatDialog} from '@angular/material/dialog';
import {SettingsDialogComponent} from './modal-dialogs/settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  drives: any;
  selectedDrive: any;

  email: any;
  driveCheckerRefresh: any;
  percentageBelow: any;

  constructor(private http: HttpClient, private dialog: MatDialog) {

  }

  ngOnInit(): void {

    this.setDrives();

  }

  setDrives() {
    this.http.get(backendUrls.BASE_END_POINT + backendUrls.FILES + backendUrls.DRIVES).subscribe(
      data => {
        if (data) {
          this.drives = data;
          console.log(this.drives);
        }
      }
    );
  }

  openSettings() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        email: this.email,
        driveCheckerRefresh: this.driveCheckerRefresh,
        percentageBelow: this.percentageBelow
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result.email;
      this.driveCheckerRefresh = result.driveCheckerRefresh;
      this.percentageBelow = result.percentageBelow;

      this.http.post(backendUrls.BASE_END_POINT + backendUrls.FILES + backendUrls.SETTINGS, result).subscribe(
        (data: any) => {
          if (data) {
            console.log(data);
          }
        }
      );
    });
  }
}
