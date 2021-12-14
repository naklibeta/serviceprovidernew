import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public router: Router) {
    let CheckLogin = localStorage.getItem('isLogged');


    if (CheckLogin && CheckLogin == 'true') {

    } else {
      this.router.navigate(['/otp-verify']);
    }
  }

}
