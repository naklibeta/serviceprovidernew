import { Component } from '@angular/core';
import { ApiService } from '../app/api.service';
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

  constructor(public apiService: ApiService) {

    console.log('codeupdated--');
    let env = this;
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
      }
    });

    PushNotifications.addListener('registration',
      (token: Token) => {
        env.UpdateDeviceToken(token);
      }
    );

    PushNotifications.addListener('registrationError', (error: any) => {
    });

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
