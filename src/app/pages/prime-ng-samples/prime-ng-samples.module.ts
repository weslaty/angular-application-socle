import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './prime-ng-samples.routing';
import { PrimeNgSamplesComponent } from './prime-ng-samples.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [PrimeNgSamplesComponent],
})
export class PrimeNgSamplesModule { }
