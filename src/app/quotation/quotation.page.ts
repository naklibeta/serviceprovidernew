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

    this.apiService.showLoader('Please wait, sending quotation..');

    let SendData = {
      "orderId": this.JobId,
      "quotation": values.quotation,
      "amount": this.CoreAmount,
      "gst": this.CGST,
      "sgst": this.SGST,
      "igst": this.IGST
    }

    this.apiService.Common_POST('/insertQuotation', SendData).subscribe((results) => {
      if (results.statusCode == 200) {

        if (results.data) {
          this.router.navigate(['/tabs/myjobs']);
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
    this.CoreAmount = parseFloat(value);

    if (this.IGST == 0 && this.CGST == 0 && this.SGST == 0) {
      this.TotalAmount = this.CoreAmount
    }


    //----------calculate amount now------------------

    if (this.IGST != 0) {
      this.TaxChanged({ value: this.IGST }, 'IGST')
    } else {
      this.TaxChanged({ value: this.CGST }, 'CGST');
      this.TaxChanged({ value: this.SGST }, 'SGST');
    }



  }

  TaxChanged(target: any, type) {
    if (!target.value) {

      if (!target.value && type == 'IGST') { this.IGST_Amount = 0 }
      if (!target.value && type == 'CGST') { this.CGST_Amount = 0 }
      if (!target.value && type == 'SGST') { this.SGST_Amount = 0 }

      return;

    }

    let targetval = parseFloat(target.value);

    if (type == 'CGST' || type == 'SGST') {
      this.TotalAmount = this.IGST_Amount = this.IGST = 0;

      //reset all taxes and update only using SGST & CGST------------
      if (type == 'CGST') this.CGST_Amount = parseFloat(((targetval / 100) * this.CoreAmount).toFixed(2));
      if (type == 'SGST') this.SGST_Amount = parseFloat(((targetval / 100) * this.CoreAmount).toFixed(2));
      this.TotalAmount = parseFloat((this.CGST_Amount + this.CoreAmount + this.SGST_Amount).toFixed(2));
    }

    if (type == 'IGST') {



      //reset all taxes and update only using IGST------------
      this.TotalAmount = this.CGST_Amount = this.SGST_Amount = this.CGST = this.SGST = 0;

      this.IGST_Amount = parseFloat(((targetval / 100) * this.CoreAmount).toFixed(2));
      this.TotalAmount = parseFloat((this.IGST_Amount + this.CoreAmount).toFixed(2));

    }

  }

  CalculateTotal() {

  }

}
