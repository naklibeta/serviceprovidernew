import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateQuotationPageRoutingModule } from './update-quotation-routing.module';

import { UpdateQuotationPage } from './update-quotation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateQuotationPageRoutingModule
  ],
  declarations: [UpdateQuotationPage]
})
export class UpdateQuotationPageModule {}
