import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})

export class PaymentsPage implements OnInit {

  public paymentData: any = [];
  public pendingpayments: any = [];
  public showCompletedList: boolean = true;
  public no_data: boolean = false;
  public IntervalVar: any;

  constructor(public apiService: ApiService) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    let env = this;
    this.GetPaymentDetails();
    this.GetPendingPaymentDetails();

    this.IntervalVar = setInterval(() => {
      env.GetPaymentDetails();
      env.GetPendingPaymentDetails();
    }, 10000);
  }

  ionViewDidLeave() {
    clearInterval(this.IntervalVar);
  }


  GetPaymentDetails() {
    this.apiService.Common_POST('/completepayment', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.paymentData = results.data;

        if (this.paymentData.length == 0) {
          this.no_data = true;
        } else {
          this.no_data = false;
        }
      } else {
        this.no_data = true;
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

  GetPendingPaymentDetails() {
    this.apiService.Common_POST('/pendingpayment', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.pendingpayments = results.data;

        if (this.pendingpayments.length == 0) {
          this.no_data = true;
        }
      } else {
        this.no_data = true;
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

  ionViewWillEnter() {
  }

  TabChange(change) {
    console.log('cleciked');
    this.showCompletedList = change;
  }

}
