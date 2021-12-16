import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleTrainingPageRoutingModule } from './schedule-training-routing.module';

import { ScheduleTrainingPage } from './schedule-training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleTrainingPageRoutingModule
  ],
  declarations: [ScheduleTrainingPage]
})
export class ScheduleTrainingPageModule {}
