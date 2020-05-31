import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { EntryComponent } from './_components/entry/entry.component';

import { DatePipe } from '@angular/common';
import { SubmitDialogComponent } from './_components/submit-dialog/submit-dialog.component';
import { LineChartComponent } from './_charts/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './_charts/bar-chart/bar-chart.component';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
/* Configure Amplify resources */
Amplify.configure(awsconfig);



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EntryComponent,
    SubmitDialogComponent,
    LineChartComponent,
    BarChartComponent
  ],
  imports: [
    AmplifyUIAngularModule,
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    ChartsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
