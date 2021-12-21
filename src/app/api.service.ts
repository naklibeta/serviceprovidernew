import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(public http: HttpClient, public toastController: ToastController, public loadingController: LoadingController) { }


  public Common_Test(postFix: any, data: any): Observable<any> {
    return this.http.post(postFix, data);
  }

  public Common_POST(postFix: any, data: any): Observable<any> {
    return this.http.post(environment.apiUrl + postFix, data);
  }

  public Common_GET(postFix: any): Observable<any> {
    return this.http.get(environment.apiUrl + postFix);
  }

  async presentToast(msg: any, timing: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: timing,
    });
    toast.present();
  }

  public Get_UserData() {
    let User = localStorage.getItem('UserData');
    return JSON.parse(User);
  }

  public Get_ProviderId() {
    let User = localStorage.getItem('UserData');

    if (!User) {
      return false;
    }
    let UserD = JSON.parse(User);

    if (!UserD.providerId) {
      return false;
    } else {
      return UserD.providerId;
    }
  }

  formatDate(dateP: any) {
    var d = new Date(dateP),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [day, month, year].join('/');
  }

  formatDateMMDD(dateP: any) {
    var date = dateP;
    var datearray = date.split("/");

    // var newdate = datearray[1] + '-' + datearray[0] + '-' + datearray[2];
    var newdate = datearray[2] + '-' + datearray[1] + '-' + datearray[0];

    return newdate;
  }

  formatDateYMD(dateP: any) {
    var d = new Date(dateP),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }


  extractTime(time: any) {



    var OnlyTime = time.split('T')[1];

    if (OnlyTime) {
      var SelectTime = OnlyTime.substring(0, 5);

      return SelectTime
    } else {
      return '';
    }

  }

  Get_UserStatus() {
    let UserData = localStorage.getItem('UserData');
    let UserParsed = JSON.parse(UserData);

    let Status = UserParsed.is_active;

    if (Status == '0' || Status == 0) {
      return 'InActive';
    } else {
      return 'Active';
    }
  }

  showLoader(loaderMsg) {
    this.loadingController.create({
      message: loaderMsg
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
      });
    });
    this.hideLoader();
  }

  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 2000);
  }

  JobStatus(status) {
    if (status == 0) { return 'Open'; }
    else if (status == 1) { return 'Accepted By Provider'; }
    else if (status == 2) { return 'Quotation Sent to User'; }
    else if (status == 3) { return 'Quotation Accepted'; }
    else if (status == 4) { return 'Quotation Rejected'; }
    else if (status == 5) { return 'Start Work'; }
    else if (status == 6) { return 'End Work'; }
    else if (status == 7) { return 'Order Cancelled By User'; }
    else if (status == 8) { return 'Payment Received'; }
    else if (status == 9) { return 'Refund Initiated'; }
    else if (status == 10) { return 'Refund Processed'; }
    else { return ''; }
  }

}
