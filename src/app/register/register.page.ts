import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

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

  constructor(public apiService: ApiService, public router: Router) {

  }

  ngOnInit() {

    this.GetSelectionOptions();



    if (!this.apiService.Get_UserData()) {

      let SetEmail = localStorage.getItem('pre_email');
      if (SetEmail) {
        this.ProviderData.emailId = SetEmail
      }

      let SetMobile = localStorage.getItem('pre_mobile');
      if (SetMobile) {
        this.ProviderData.pre_mobile = SetMobile
      }
    } else {

    }
  }

  ionViewDidEnter() {

    let catSelected = localStorage.getItem('selectedCategories');
    this.SelectedCategories = JSON.parse(catSelected);
  }


  RegisterNow(formvalues: any) {

    if (!this.apiService.Get_ProviderId()) {
      this.RegisteringNew = true;
      if (formvalues.mobile.length != 10) {
        this.apiService.presentToast('Please enter correct mobile number', 3000);
        return
      }

    } else {
      this.RegisteringNew = false;
      formvalues.mobile = this.ProviderData.mobile;
    }

    this.apiService.showLoader('Please wait, registering user..');

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
      if (results.statusCode == 200) {


        localStorage.setItem('UserData', JSON.stringify(results.data));
        this.apiService.presentToast(results.message, 3000);
        localStorage.setItem('isLogged', 'true');
        debugger
        if (this.RegisteringNew == false) {
          this.router.navigate(['/settings']);
        } else {
          this.router.navigate(['']);
        }


      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
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

    //------------Get Data CIties------------------------------------------

    this.apiService.Common_GET('/findCityByState/' + id.value).subscribe((results) => {
      if (results.statusCode == 200) {
        this.Cities = results.data;

        this.ProviderData.cityId = this.ProviderData.cityId;
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



}
