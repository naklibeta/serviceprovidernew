import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public BadgeData: any;

  constructor(public router: Router, public apiService: ApiService) {

    this.BadgeData = { myJobsCount: 0, notificationCount: 0 }
    let CheckLogin = localStorage.getItem('isLogged');


    if (CheckLogin && CheckLogin == 'true') {

    } else {
      this.router.navigate(['/otp-verify']);
    }

    this.GetBadges();
  }


  GetBadges() {
    this.apiService.Common_POST('/tabCounter', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.BadgeData = results;
      } else {
      }
    }, err => {
      //this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }




}
