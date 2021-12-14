import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalDetailsPage } from './professional-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalDetailsPageRoutingModule {}
