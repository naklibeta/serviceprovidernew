import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient, public toastController: ToastController) { }


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


}
