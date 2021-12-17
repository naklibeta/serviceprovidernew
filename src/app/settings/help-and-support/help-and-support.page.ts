import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-help-and-support',
  templateUrl: './help-and-support.page.html',
  styleUrls: ['./help-and-support.page.scss'],
})

export class HelpAndSupportPage implements OnInit {

  public faq: any = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.GetFaq()
  }

  GetFaq() {
    this.apiService.Common_GET('/faq').subscribe((results) => {
      if (results.statusCode == 200) {
        this.faq = results.data;
      } else {
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

}
