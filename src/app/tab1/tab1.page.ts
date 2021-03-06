import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  public upcoming: any = [];
  public today: any = [];
  public category: any = [];
  public providerId: any = '';
  public IntervalVar: any;
  public DashboardMsg: any = '';

  constructor(public apiService: ApiService, public router: Router) {

  }



  ngOnInit() {

    let UserData = this.apiService.Get_UserData();
    if (UserData) this.providerId = UserData.providerId;

    let providerIc_check = this.apiService.Get_ProviderId();

    if (!providerIc_check) {
      clearInterval(this.IntervalVar);
      this.router.navigate(['/otp-verify']);
    }


    this.LoadJobs();

  }

  Navigate(message) {
    if (message.includes('kyc') || message.includes('KYC')) {
      this.router.navigate(['/kyc']);
    }
  }

  // UpdateDeviceToken(token) {
  //   let Data = {
  //     "device_type": 'android',
  //     "device_token": token.value,
  //     "providerId": this.apiService.Get_ProviderId()
  //   }
  //   this.apiService.Common_POST('/update-device-token', Data).subscribe((results) => {
  //     if (results.statusCode == 200) { }


  //   }, err => {
  //     this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
  //   });
  // }

  ionViewWillEnter() {

    let UserData = this.apiService.Get_UserData();
    if (UserData) this.providerId = UserData.providerId;

    if (this.apiService.Get_ProviderId()) {
      let env = this;
      env.LoadJobs();

      this.IntervalVar = setInterval(() => {
        env.LoadJobs();
      }, 10000);
    }

  }

  ionViewDidLeave() {
    clearInterval(this.IntervalVar);
  }



  LoadJobs() {
    // this.DashboardMsg = '';
    this.apiService.Common_POST('/getJobs', { provider_id: this.providerId }).subscribe((results) => {
      if (results.statusCode == 200) {

        if (results.data) {
          this.upcoming = results.data.upcoming;
          this.today = results.data.today;
          this.category = results.data.category;
        }
        if (results.message) {
          this.DashboardMsg = results.message;
        } else {
          this.DashboardMsg = '';
        }
      } else {
        this.DashboardMsg = results.message;
        if (results.data) {
          this.upcoming = results.data.upcoming;
          this.today = results.data.today;
          this.category = results.data.category;
        }
        //this.apiService.presentToast(results.message, 3000);
      }

    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }


  JobDetails(upcomingjobs: any) {

    localStorage.setItem('jobdetails', upcomingjobs.orderId);

    this.router.navigate(['/job-details']);

  }




}
