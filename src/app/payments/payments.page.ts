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

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.GetPaymentDetails()
    this.GetPendingPaymentDetails()
  }

  GetPaymentDetails() {
    this.apiService.Common_POST('/completepayment', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.paymentData = results.data;
      } else {
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

  GetPendingPaymentDetails() {
    this.apiService.Common_POST('/pendingpayment', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.pendingpayments = results.data;
      } else {
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
