import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { MaterialModule, MdToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import 'hammerjs';

import { appRoutes } from "app/app.routing";
import { CodeConverterService } from "app/code-converter.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CodeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
