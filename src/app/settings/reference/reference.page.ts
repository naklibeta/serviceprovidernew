import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.page.html',
  styleUrls: ['./reference.page.scss'],
})

export class ReferencePage implements OnInit {

  public ProviderData: any = {};

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.GetProviderData()
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

    value.providerId = this.apiService.Get_ProviderId();

    this.apiService.Common_POST('/reference', value).subscribe((results) => {
      if (results.statusCode == 200) {
        this.apiService.presentToast(results.message, 3000);
      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

}