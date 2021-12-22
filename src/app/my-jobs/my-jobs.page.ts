import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.page.html',
  styleUrls: ['./my-jobs.page.scss'],
})
export class MyJobsPage implements OnInit {

  public providerId: any = '';
  public MyJobs: any = [];
  public no_data: boolean = false;
  public IntervalVar: any;

  constructor(public apiService: ApiService, public router: Router) {
    let UserData = this.apiService.Get_UserData();
    this.providerId = UserData.providerId;
  }

  ngOnInit() {


  }


  ionViewDidEnter() {

    this.apiService.showLoader('Please wait, getting your jobs..');

    if (this.apiService.Get_ProviderId()) {
      let env = this;
      env.GetJobs();

      this.IntervalVar = setInterval(() => {
        env.GetJobs();
      }, 10000);
    }

  }

  ionViewDidLeave() {
    clearInterval(this.IntervalVar);
  }


  GetJobs() {


    this.apiService.Common_POST('/myjobs', { provider_id: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.MyJobs = results.data;

        if (this.MyJobs.length == 0) {
          this.no_data = true;
        }

      } else {
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }


  GotoJobs(joblist) {
    localStorage.setItem('jobdetails', joblist.orderId);
    this.router.navigate(['/job-details']);
  }

}
