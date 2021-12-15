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

  public CoreAmount: any = 0;
  public CGST: any = 0;
  public SGST: any = 0;
  public IGST: any = 0;
  public TotalAmount: any = 0;

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


  AmountChanged(target: any) {

    let value = target.value;
    this.TotalAmount = value;

  }

  TaxChanged(target: any, type) {

    let targetval = target.value;

    if (type == 'CGST') {

      let cgstamount = (targetval / 100) * this.CoreAmount;
      this.TotalAmount = cgstamount + this.CoreAmount;

    }

  }
}
