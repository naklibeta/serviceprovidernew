import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})

export class NotificationPage implements OnInit {

  public notificationsdata: any = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.GetNotifications()
    this.MarkRead()
  }

  GetNotifications() {
    this.apiService.Common_POST('/notification', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.notificationsdata = results.data;
      } else {
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

  MarkRead() {
    this.apiService.Common_POST('/readNotification', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

}
