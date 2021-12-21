import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateQuotationPage } from './update-quotation.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateQuotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateQuotationPageRoutingModule {}
