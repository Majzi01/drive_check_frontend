import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { DriveSpaceComponent } from './drive-space/drive-space.component';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { SettingsDialogComponent } from './modal-dialogs/settings-dialog/settings-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ChartsModule} from 'ng2-charts';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import {ChartCommonModule} from '@swimlane/ngx-charts';
import { GraphComponent } from './drive-space/graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    DriveSpaceComponent,
    SettingsDialogComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    MatFormFieldModule,
    NgxGraphModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    ChartCommonModule
  ],
  entryComponents: [
    SettingsDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
