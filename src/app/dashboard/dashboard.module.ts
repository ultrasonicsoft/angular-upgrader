import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from "@angular/router";
import { MdInputModule, MdCardModule, MdGridListModule, MdButtonModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

export const routes: Routes = [
  { path: '', component: DashboardComponent }
];
@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdCardModule,
    MdGridListModule,
    MdButtonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
