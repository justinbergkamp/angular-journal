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



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
