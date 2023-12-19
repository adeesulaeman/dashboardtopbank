import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [HttpClient]
})
export class DashboardModule { }
