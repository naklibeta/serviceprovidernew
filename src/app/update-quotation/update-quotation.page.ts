import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-quotation',
  templateUrl: './update-quotation.page.html',
  styleUrls: ['./update-quotation.page.scss'],
})
export class UpdateQuotationPage implements OnInit {

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

    this.JobId = localStorage.getItem('jobdetailsUpdate');
    this.LoadJob();

  }


  SendQuo(values: any) {

    let SendData = {
      "orderId": this.JobId,
      "quotation": values.quotation,
      "amount": this.CoreAmount,
      "gst": this.CGST,
      "sgst": this.SGST,
      "igst": this.IGST
    }

    this.apiService.Common_POST('/newQuotation', SendData).subscribe((results) => {
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
          this.CGST = this.JobDetails.taxPercentage;
          this.SGST = this.JobDetails.taxPercentage2;
          this.IGST = this.JobDetails.taxPercentage3;

          this.CoreAmount = this.JobDetails.quotation.taxable_amount;
          this.TotalAmount = this.JobDetails.quotation.amount;

          //-----Apply Tax Cost-----------
          this.CGST_Amount = (this.CGST / 100) * this.CoreAmount;
          this.SGST_Amount = (this.SGST / 100) * this.CoreAmount;
          this.IGST_Amount = (this.IGST / 100) * this.CoreAmount;

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
    this.CoreAmount = parseInt(value);

    //----------calculate amount now------------------

    if (this.IGST != 0) {
      this.TaxChanged({ value: this.IGST }, 'IGST')
    } else {
      this.TaxChanged({ value: this.CGST }, 'CGST');
      this.TaxChanged({ value: this.SGST }, 'SGST');
    }

  }

  TaxChanged(target: any, type) {
    if (!target.value) { return }

    debugger

    let targetval = parseInt(target.value);

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



