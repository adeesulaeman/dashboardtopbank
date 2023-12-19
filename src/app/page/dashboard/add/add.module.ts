import { AddComponent } from './add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AddComponent]
})
export class AddModule { }
