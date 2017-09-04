import { Routes, RouterModule } from '@angular/router';

import { PrimengComponent } from './primeng.component';
import { Sample1Component } from './components/sample1/sample1.component';

const routes: Routes = [
  {
    path: '',
    component: PrimengComponent,
    children: [
      { path: 'sample1', component: Sample1Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
