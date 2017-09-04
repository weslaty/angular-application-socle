import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengComponent } from './primeng.component';
import { Sample1Component } from './components/sample1/sample1.component';
import { routing } from './primeng.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    PrimengComponent,
    Sample1Component,
  ],
})
export class PrimengModule { }
