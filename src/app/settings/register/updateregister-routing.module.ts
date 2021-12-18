import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRegisterPage } from './updateregister.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRegisterPageRoutingModule { }
