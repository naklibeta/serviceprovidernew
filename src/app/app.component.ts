import { Component } from '@angular/core';
import { ApiService } from '../app/api.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public Token: any = '';

  constructor(public apiService: ApiService, private platform: Platform, public router: Router, public alert: AlertController) {

    const url = this.router.url;

    console.log('codeupdated--');
    let env = this;
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
      }
    }, err => {

    });

    // PushNotifications.addListener('registration',
    //   (token: Token) => {
    //     env.UpdateDeviceToken(token);
    //   }
    // );

    // PushNotifications.addListener('registrationError', (error: any) => {
    // });


    this.platform.backButton.subscribeWithPriority(1, () => {
      const urlcheck = this.router.url;

      debugger

      if (urlcheck == '/tabs/tab1' || urlcheck == '/' || urlcheck == '/my-jobs' || urlcheck == '/payments'
        || urlcheck == 'notification' || urlcheck == '/settings'
      ) {


        this.ChooseExit();


      } else {
        this.router.navigate(['/tabs/tab1']);
      }
    });

  }


  async ChooseExit() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Exit App!',
      message: 'Are you sure, do you want to exit app?',
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
            navigator['app'].exitApp();

          }
        }
      ]
    });

    await alert.present();
  }


  UpdateDeviceToken(token) {
    let Data = {
      "device_type": 'android',
      "device_token": token.value,
      "providerId": this.apiService.Get_ProviderId()
    }
    this.apiService.Common_POST('/update-device-token', Data).subscribe((results) => {
      if (results.statusCode == 200) { }


    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }




}
