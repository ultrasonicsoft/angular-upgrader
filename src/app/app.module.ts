import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { MaterialModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MdInputModule, MdCardModule, MdGridListModule, MdButtonModule,MdTooltipModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import 'hammerjs';

// import { appRoutes } from "app/app.routing";
import { CodeConverterService } from "app/converter/code-converter.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    CommonModule,
    MdInputModule,
    MdCardModule,
    MdGridListModule,
    MdButtonModule,
    MdTooltipModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [CodeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
