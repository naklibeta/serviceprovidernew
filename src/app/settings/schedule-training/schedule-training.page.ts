import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-training',
  templateUrl: './schedule-training.page.html',
  styleUrls: ['./schedule-training.page.scss'],
})

export class ScheduleTrainingPage implements OnInit {

  public myDetails: any = {};
  public ProviderData: any = {};
  public trainingData: boolean = false;
  public trainingDetails: any = {};

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.GetProviderData()
    this.myDetails = this.apiService.Get_UserData()
  }

  UpdateProNow(value) {

    this.apiService.showLoader('Please wait, updating details..');

    value.providerId = this.apiService.Get_ProviderId();

    this.apiService.Common_POST('/setTraining', value).subscribe((results) => {
      if (results.statusCode == 200) {
        this.apiService.presentToast(results.message, 3000);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.router.navigate(['/settings']));
      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

  GetProviderData() {

    this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.ProviderData = results.data;

        if (results.trainingData) {
          this.trainingData = true;
          this.trainingDetails = results.trainingData;
        }
        else {
          this.trainingData = false;
        }
      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

}
