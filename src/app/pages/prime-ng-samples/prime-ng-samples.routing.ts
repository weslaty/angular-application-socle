import { Routes, RouterModule } from '@angular/router';

import { PrimeNgSamplesComponent } from './prime-ng-samples.component';

const routes: Routes = [
  {
    path: '',
    component: PrimeNgSamplesComponent
  }
];

export const routing = RouterModule.forChild(routes);
