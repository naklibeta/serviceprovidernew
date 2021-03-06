import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
})

export class JobDetailsPage implements OnInit {

  public JobDetails: any = {};
  public JobId: any;
  IntervalVar: any;

  constructor(public apiService: ApiService, public router: Router, public loader: LoadingController) { }

  ngOnInit() {


    this.JobId = localStorage.getItem('jobdetails');
    this.LoadJob();


  }

  ionViewDidEnter() {
    this.apiService.showLoader('Please wait, getting job details..');
    if (this.apiService.Get_ProviderId()) {
      let env = this;
      env.LoadJob();

      this.IntervalVar = setInterval(() => {
        env.LoadJob();
      }, 10000);
    }

  }

  ionViewDidLeave() {
    clearInterval(this.IntervalVar);
  }


  LoadJob() {

    this.apiService.Common_POST('/jobDetails', { orderId: this.JobId }).subscribe((results) => {

      if (results.statusCode == 200) {

        if (results.data) {
          this.JobDetails = results.data;
        }

      } else {
        this.apiService.presentToast('Error occured, unable to find job details ', 3000);
      }

    }, err => {

      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }


  AcceptJob() {

    this.showLoader('Please wait..');

    let AcceptSend = {
      "provider_id": this.apiService.Get_ProviderId(),
      "orderId": this.JobId
    }

    this.apiService.Common_POST('/accept', AcceptSend).subscribe((results) => {
      this.hideLoader();
      if (results.statusCode == 200) {
        this.ngOnInit();
        this.apiService.presentToast(results.message, 3000);

      } else {

        this.apiService.presentToast('Error occured, unable to accept job ', 3000);
      }

    }, err => {
      this.hideLoader();
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

  StartStatus() {
    this.showLoader('Please wait..');

    let AcceptSend = {
      "provider_id": this.apiService.Get_ProviderId(),
      "orderId": this.JobId
    }

    this.apiService.Common_POST('/start', AcceptSend).subscribe((results) => {
      this.hideLoader();
      if (results.statusCode == 200) {
        this.ngOnInit();
        this.apiService.presentToast(results.message, 3000);

      } else {
        this.apiService.presentToast('Error occured, unable to start job ', 3000);
      }

    }, err => {
      this.hideLoader();
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

  EndStatus() {
    this.showLoader('Please wait..');
    let AcceptSend = {
      "provider_id": this.apiService.Get_ProviderId(),
      "orderId": this.JobId
    }

    this.apiService.Common_POST('/end', AcceptSend).subscribe((results) => {
      this.hideLoader();
      if (results.statusCode == 200) {
        this.ngOnInit();
        this.apiService.presentToast(results.message, 3000);

      } else {
        this.apiService.presentToast('Error occured, unable to end job ', 3000);
      }

    }, err => {
      this.hideLoader();
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }


  Decline() {
    this.showLoader('Please wait..');
    let AcceptSend = {
      "providerId": this.apiService.Get_ProviderId(),
      "orderId": this.JobId
    }

    this.apiService.Common_POST('/declined', AcceptSend).subscribe((results) => {
      if (results.statusCode == 200) {
        this.ngOnInit();
        this.apiService.presentToast(results.message, 3000);

      } else {
        this.apiService.presentToast('Error occured, unable to end job ', 3000);
      }

    }, err => {
      this.hideLoader();
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }



  SendQuotation() {
    this.router.navigate(['/quotation']);
  }

  UpdateQuotation() {
    localStorage.setItem('jobdetailsUpdate', this.JobId);
    this.router.navigate(['/update-quotation']);
  }

  showLoader(loaderMsg) {
    this.loader.create({
      message: loaderMsg
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
      });
    });

  }

  hideLoader() {
    let env = this;
    setTimeout(() => {
      this.loader.dismiss();
    }, 1000);
  }


}
