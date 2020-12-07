import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drive-space',
  templateUrl: './drive-space.component.html',
  styleUrls: ['./drive-space.component.css']
})
export class DriveSpaceComponent implements OnInit {

  @Input() drive: any;

  constructor() { }

  ngOnInit(): void {
  }

}
