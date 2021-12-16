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

  public CGST_Amount: any = 0;
  public SGST_Amount: any = 0;
  public IGST_Amount: any = 0;

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {

    this.JobId = localStorage.getItem('jobdetails');
    this.LoadJob();

  }


  SendQuo(values: any) {

    let SendData = {
      "orderId": this.JobId,
      "quotation": values.quotation,
      "amount": this.TotalAmount,
      "gst": this.CGST,
      "sgst": this.SGST,
      "igst": this.IGST
    }

    this.apiService.Common_POST('/insertQuotation', SendData).subscribe((results) => {
      if (results.statusCode == 200) {

        if (results.data) {
          this.router.navigate(['/my-jobs']);
          this.apiService.presentToast(results.message, 3000);
        }

      } else {
        this.apiService.presentToast('Error occured, unable to send quotation ', 3000);
      }

    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
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

    if (type == 'CGST' || type == 'SGST') {
      this.TotalAmount = 0;
      this.IGST_Amount = 0;
      this.IGST = 0;

      if (type == 'CGST') this.CGST_Amount = (targetval / 100) * this.CoreAmount;
      if (type == 'SGST') this.SGST_Amount = (targetval / 100) * this.CoreAmount;
      this.TotalAmount = this.CGST_Amount + this.CoreAmount + this.SGST_Amount;


    }


    if (type == 'IGST') {

      //reset C/SGST------------
      this.TotalAmount = 0;
      this.CGST_Amount = 0;
      this.SGST_Amount = 0;
      this.CGST = 0;
      this.SGST = 0;


      this.IGST_Amount = (targetval / 100) * this.CoreAmount;
      this.TotalAmount = this.IGST_Amount + this.CoreAmount;

    }

  }

  CalculateTotal() {

  }

}
