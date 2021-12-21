import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.page.html',
  styleUrls: ['./reference.page.scss'],
})

export class ReferencePage implements OnInit {

  public ProviderData: any = {};

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.GetProviderData();
    this.apiService.showLoader('Please wait, getting your details..');
  }

  GetProviderData() {

    this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.ProviderData = results.data;
      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });

  }

  UpdateProNow(value) {

    this.apiService.showLoader('Please wait, updating details..');

    value.providerId = this.apiService.Get_ProviderId();

    this.apiService.Common_POST('/reference', value).subscribe((results) => {
      if (results.statusCode == 200) {
        this.back();
        this.apiService.presentToast(results.message, 3000);
      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

  back() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['/settings']));
  }

}