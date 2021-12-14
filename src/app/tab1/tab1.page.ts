import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public upcoming: any = [];
  public today: any = [];
  public category: any = [];
  public providerId: any = '';

  constructor(public apiService: ApiService, public router: Router) {
    let UserData = this.apiService.Get_UserData();
    this.providerId = UserData.providerId;
  }

  ngOnInit() {
    let env = this;
    this.LoadJobs();

    setInterval(() => {
      env.LoadJobs();
    }, 10000);




  }

  LoadJobs() {
    this.apiService.Common_POST('/getJobs', { provider_id: this.providerId }).subscribe((results) => {
      if (results.statusCode == 200) {

        if (results.data) {
          this.upcoming = results.data.upcoming;
          this.today = results.data.today;
          this.category = results.data.category;
        }

      } else {
        this.apiService.presentToast(results.message, 3000);
      }

    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

}
