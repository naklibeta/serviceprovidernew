import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessionalDetailsPageRoutingModule } from './professional-details-routing.module';

import { ProfessionalDetailsPage } from './professional-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessionalDetailsPageRoutingModule
  ],
  declarations: [ProfessionalDetailsPage]
})
export class ProfessionalDetailsPageModule {}
