import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public apiService: ApiService, public router: Router, public alert: AlertController) { }

  ngOnInit() {

  }

  ProfessionalDetails() {
    this.router.navigate(['/professional-details']);
  }

  async logout() {

    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Logout !',
      message: 'Are you sure, do you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',

          handler: (blah) => {

          }
        }, {
          text: 'Yes',
          handler: () => {

            localStorage.removeItem('UserData');
            localStorage.removeItem('isLogged');
            localStorage.removeItem('selectedCategories');
            this.router.navigate(['/otp-verify']);


          }
        }
      ]
    });

    await alert.present();

  }

  kyc() {
    this.router.navigate(['/kyc']);
  }

  reference() {
    this.router.navigate(['/reference']);
  }

  training() {
    this.router.navigate(['/schedule-training']);
  }

}
