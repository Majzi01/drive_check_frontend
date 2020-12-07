import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveSpaceComponent } from './drive-space.component';

describe('DriveSpaceComponent', () => {
  let component: DriveSpaceComponent;
  let fixture: ComponentFixture<DriveSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
