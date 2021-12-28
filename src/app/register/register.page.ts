import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  States: any = [];
  Cities: any = [];

  Email: any = '';
  Mobile: any = '';

  SelectedCategories: any = [];
  ProviderData: any = {};
  RegisteringNew: boolean = false;
  CityBinded: boolean = false;

  constructor(public apiService: ApiService, public router: Router, public loader: LoadingController) {

  }

  ngOnInit() {

    this.GetSelectionOptions();


    if (!this.apiService.Get_ProviderId()) {

      let SetEmail = localStorage.getItem('pre_email');
      if (SetEmail) {
        this.ProviderData.emailId = SetEmail;
        this.ProviderData.makeEmailDisabled = true;
      }

      let SetMobile = localStorage.getItem('pre_mobile');
      if (SetMobile) {
        this.ProviderData.mobile = SetMobile;
        this.ProviderData.makeMobileDisabled = true;
      }
    } else {

    }

    if (this.apiService.Get_ProviderId()) {
      this.apiService.showLoader('Please wait, getting your details..');
    }
  }

  ionViewDidEnter() {

    let catSelected = localStorage.getItem('selectedCategories');
    if (catSelected) this.SelectedCategories = JSON.parse(catSelected);
  }


  RegisterNow(formvalues: any) {

    if (!this.apiService.Get_ProviderId()) {
      this.RegisteringNew = true;
      if (formvalues.mobile) {
        if (formvalues.mobile.length != 10) {
          this.apiService.presentToast('Please enter correct mobile number', 3000);
          return
        }
      } else {
        formvalues.mobile = this.ProviderData.mobile;
      }


    } else {
      this.RegisteringNew = false;
      formvalues.mobile = this.ProviderData.mobile;
    }

    this.showLoader('Please wait, registering user..');

    //----find state name and city name-------------------------------------------------------

    let UserData: any = localStorage.getItem('UserData');
    UserData = JSON.parse(UserData);

    var StateSelected = this.States.filter(function (o) {
      return o.id == formvalues.stateId;
    });
    formvalues.state = StateSelected[0].name;


    var CitiesSelected = this.Cities.filter(function (o) {
      return o.id == formvalues.cityId;
    });
    formvalues.city = CitiesSelected[0].city;


    formvalues.serviceCategory = this.SelectedCategories;
    formvalues.id = UserData.id;

    let checkUpdate = '/profile';

    if (!this.apiService.Get_ProviderId()) {
      checkUpdate = '/register-provider';
    } else {
      formvalues.providerId = this.ProviderData.providerId
    }


    this.apiService.Common_POST(checkUpdate, formvalues).subscribe((results) => {
      this.hideLoader();
      if (results.statusCode == 200) {


        localStorage.setItem('UserData', JSON.stringify(results.data));
        this.apiService.presentToast(results.message, 3000);
        localStorage.setItem('isLogged', 'true');
        localStorage.removeItem('pre_email');
        localStorage.removeItem('pre_mobile');
        //-------remove selected categories-----------------------
        if ('/register-provider' == checkUpdate) localStorage.removeItem('selectedCategories');
        if (this.RegisteringNew == false) {
          this.router.navigate(['/tabs/settings']);
        } else {
          this.router.navigate(['']);
        }


      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.hideLoader();
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }


  GetSelectionOptions() {

    //------------Get Data and fill all three select fields------------------------------------------

    this.apiService.Common_GET('/findStates').subscribe((results) => {
      if (results.statusCode == 200) {
        this.States = results.data;
        this.GetProviderData();
      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });


  }

  GetCitis(id: any) {

    let env = this;

    // if (env.apiService.Get_ProviderId()) {
    if (env.ProviderData.stateId != id && env.CityBinded == true) {
      env.ProviderData.cityId = '';
    }
    // }

    //------------Get Data CIties------------------------------------------

    this.apiService.Common_GET('/findCityByState/' + id.value).subscribe((results) => {
      if (results.statusCode == 200) {
        this.Cities = results.data;

        this.ProviderData.cityId = this.ProviderData.cityId;


        setTimeout(() => {
          env.CityBinded = true;
        }, 2000);


      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });


  }


  ShowCategories() {
    this.router.navigate(['/select-category']);
  }


  GetProviderData() {
    let env = this;

    if (this.apiService.Get_ProviderId()) {
      this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
        if (results.statusCode == 200) {
          env.ProviderData = results.data;
          if (results.serviceCategory) {
            localStorage.setItem('selectedCategories', JSON.stringify(results.serviceCategory));
            this.SelectedCategories = results.serviceCategory
          }
        } else {
          this.apiService.presentToast(results.message, 3000);
        }
      }, err => {
        this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
      });
    }
  }


  showLoader(loaderMsg) {
    this.loader.create({
      message: loaderMsg
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
      });
    });

  }

  hideLoader() {
    let env = this;
    setTimeout(() => {
      this.loader.dismiss();
    }, 1000);
  }



}
