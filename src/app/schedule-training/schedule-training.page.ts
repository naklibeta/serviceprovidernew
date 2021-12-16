import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-schedule-training',
  templateUrl: './schedule-training.page.html',
  styleUrls: ['./schedule-training.page.scss'],
})
export class ScheduleTrainingPage implements OnInit {

  public myDetails: any = {};

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.myDetails = this.apiService.Get_UserData()
  }

  UpdateProNow(value) {

    value.providerId = this.apiService.Get_ProviderId();

    this.apiService.Common_POST('/setTraining', value).subscribe((results) => {
      if (results.statusCode == 200) {
        this.apiService.presentToast(results.message, 3000);
      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

}
