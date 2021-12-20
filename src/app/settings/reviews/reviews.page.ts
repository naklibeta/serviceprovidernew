import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})

export class ReviewsPage implements OnInit {

  public reviewdata: any = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.GetReviews();
  }

  GetReviews() {
    this.apiService.Common_POST('/reviews', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.reviewdata = results.data;
      } else {
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

}
