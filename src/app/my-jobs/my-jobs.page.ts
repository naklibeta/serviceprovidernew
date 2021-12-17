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

  constructor(public apiService: ApiService, public router: Router) {
    let UserData = this.apiService.Get_UserData();
    this.providerId = UserData.providerId;
  }

  ngOnInit() {
    this.apiService.showLoader('Please wait, getting your jobs..');
    this.GetJobs();
  }


  GetJobs() {


    this.apiService.Common_POST('/myjobs', { provider_id: this.providerId }).subscribe((results) => {
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
