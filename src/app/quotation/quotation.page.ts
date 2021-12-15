import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.page.html',
  styleUrls: ['./quotation.page.scss'],
})
export class QuotationPage implements OnInit {

  public JobDetails: any = {};
  public JobId: any;

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {

    this.JobId = localStorage.getItem('jobdetails');
    this.LoadJob();

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
}
