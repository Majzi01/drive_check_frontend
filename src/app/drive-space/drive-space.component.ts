import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {backendUrls} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-drive-space',
  templateUrl: './drive-space.component.html',
  styleUrls: ['./drive-space.component.css']
})
export class DriveSpaceComponent implements OnInit, OnChanges {

  @Input() drive: any;
  driveInfo: any;
  chart: any = [];

  title: any = 'dashboard';
  chart2: any = [];
  pie: any;
  doughnut: any;

  constructor(private http: HttpClient) {
    this.driveInfo = {
      usedSpace: '',
      freeSpace: '',
      totalSpace: ''
    };
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.driveInfo = this.setDiskInfo();
  }

  setDiskInfo() {
    const dataToPost = {
      drive: this.drive,
    };

    this.http.post(backendUrls.BASE_END_POINT + backendUrls.FILES + backendUrls.PATH, dataToPost).subscribe(
      data => {
        if (data) {
          this.driveInfo = data;
        }
      }
    );
  }
}
