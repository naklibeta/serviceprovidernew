import { Component } from '@angular/core';
import { ApiService } from '../app/api.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


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
  public LatestVersion: any;

  constructor(public apiService: ApiService, public inappb: InAppBrowser,
    private platform: Platform, public router: Router, public alert: AlertController, public appversion: AppVersion
  ) {

    this.CheckAppVersion();


    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    const url = this.router.url;


    //SplashScreen.hide();

    console.log('codeupdated--');
    let env = this;
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
      }
    }, err => {

    });

    PushNotifications.addListener('registration',
      (token: Token) => {
        env.UpdateDeviceToken(token);
      }
    );

    // PushNotifications.addListener('registrationError', (error: any) => {
    // });


    this.platform.backButton.subscribeWithPriority(1, () => {
      const urlcheck = this.router.url;

      if (urlcheck == '/tabs/tab1' || urlcheck == '/' || urlcheck == '/my-jobs' || urlcheck == '/payments'
        || urlcheck == 'notification' || urlcheck == '/settings' || urlcheck == '/otp-verify'
      ) {
        this.ChooseExit();
      } else if (this.apiService.Get_ProviderId()) {
        this.router.navigate(['/tabs/tab1']);
      } else {
        this.router.navigate(['/otp-verify']);
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

    if (!this.apiService.Get_ProviderId()) {
      return;
    }

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

  CheckAppVersion() {

    this.apiService.Common_GET('/spapp-version').subscribe((results) => {
      this.LatestVersion = results.versionCode;
      this.appversion.getVersionCode().then(value => {
        console.log(value, 'currentverison');
        if (value != this.LatestVersion) {
          this.ShowUpdateAlert();
        }
      }).catch(err => {
      });
    });

  }

  async ShowUpdateAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'New Update Available!',
      message: 'Please update latest version of NakliBeta Service Provider App!',
      buttons: [
        {
          text: 'Update',
          role: 'cancel',
          cssClass: 'secondary',

          handler: (blah) => {


            const browser = this.inappb.create("https://play.google.com/store/apps/details?id=com.service.naklibeta.nakli_beta_service_provider");

          }
        }
      ]
    });

    await alert.present();
  }





}
