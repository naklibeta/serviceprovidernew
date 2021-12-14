import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.page.html',
  styleUrls: ['./otp-verify.page.scss'],
})
export class OtpVerifyPage implements OnInit {

  @ViewChild('otp1') otp1;
  @ViewChild('otp2') otp2;
  @ViewChild('otp3') otp3;
  @ViewChild('otp4') otp4;

  public username: any = '';
  public ShowEnterOTP: boolean = false;
  public TimerTextShow = false;
  public FinalOTP: any;
  public UserVerified: boolean;

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {

  }

  LoginNow() {
    // this.router.navigate(['']);
    this.ShowEnterOTP = true;
    // this.otp1.value = this.otp2.value = this.otp3.value = this.otp4.value = '';

    this.apiService.Common_POST('/login', { username: this.username }).subscribe((results) => {
      if (results.statusCode == 200) {

        localStorage.setItem('UserData', JSON.stringify(results.data));

        let OTPR = results.otp;
        if (OTPR) {
          var OTPEncoded: any = atob(OTPR);
          this.FinalOTP = OTPEncoded - 1212;
          console.log(this.FinalOTP, 'this.FinalOTP');
          this.UserVerified = results.userVerification;
        } else {
          this.apiService.presentToast('Error occured: OTP not sent from server', 3000);
        }

      } else {
        this.apiService.presentToast(results.message, 3000);
      }

    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

  VerifyNow() {

    let OTPEntered = this.otp1.value + '' + this.otp2.value + '' + this.otp3.value + '' + this.otp4.value;

    if (OTPEntered.length != 4) {
      return;
    }
    this.ShowEnterOTP = true;

    if (OTPEntered == this.FinalOTP) {

      if (this.UserVerified == true) {
        localStorage.setItem('isLogged', 'true');
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/register']);

      }

    } else {
      this.apiService.presentToast('OTP does not match, please try again', 3000);
    }

  }


  otpController(event, next, prev) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }

}