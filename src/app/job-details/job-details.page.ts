import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {

  public JobDetails: any = {};
  public JobId: any;

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {

    this.JobId = localStorage.getItem('jobdetails');
    this.LoadJob();

  }


  LoadJob() {

    this.apiService.showLoader('Please wait, getting job details..');

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

    let AcceptSend = {
      "provider_id": this.apiService.Get_ProviderId(),
      "orderId": this.JobId
    }

    this.apiService.Common_POST('/accept', AcceptSend).subscribe((results) => {
      if (results.statusCode == 200) {
        this.ngOnInit();
        this.apiService.presentToast(results.message, 3000);

      } else {
        this.apiService.presentToast('Error occured, unable to accept job ', 3000);
      }

    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

  StartStatus() {

    let AcceptSend = {
      "provider_id": this.apiService.Get_ProviderId(),
      "orderId": this.JobId
    }

    this.apiService.Common_POST('/start', AcceptSend).subscribe((results) => {
      if (results.statusCode == 200) {
        this.ngOnInit();
        this.apiService.presentToast(results.message, 3000);

      } else {
        this.apiService.presentToast('Error occured, unable to start job ', 3000);
      }

    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

  EndStatus() {

    let AcceptSend = {
      "provider_id": this.apiService.Get_ProviderId(),
      "orderId": this.JobId
    }

    this.apiService.Common_POST('/end', AcceptSend).subscribe((results) => {
      if (results.statusCode == 200) {
        this.ngOnInit();
        this.apiService.presentToast(results.message, 3000);

      } else {
        this.apiService.presentToast('Error occured, unable to end job ', 3000);
      }

    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }


  Decline() {
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




}
