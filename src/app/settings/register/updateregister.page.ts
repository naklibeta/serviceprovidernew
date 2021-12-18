import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './updateregister.page.html',
  styleUrls: ['./updateregister.page.scss'],
})
export class UpdateRegisterPage implements OnInit {

  States: any = [];
  Cities: any = [];

  StateValue: any;
  CityValue: any;

  Email: any = '';
  Mobile: any = '';

  SelectedCategories: any = [];
  ProviderData: any = {};

  constructor(public apiService: ApiService, public router: Router) {

  }

  ngOnInit() {

    this.GetSelectionOptions();

    this.GetProviderData();


    let SetEmail = localStorage.getItem('pre_email');
    if (SetEmail) {
      this.Email = SetEmail
    }

    let SetMobile = localStorage.getItem('pre_mobile');
    if (SetMobile) {
      this.Mobile = SetMobile
    }


  }

  ionViewDidEnter() {

    let catSelected = localStorage.getItem('selectedCategories');
    this.SelectedCategories = JSON.parse(catSelected);
  }


  RegisterNow(formvalues: any) {

    if (formvalues.mobile.length != 10) {
      this.apiService.presentToast('Please enter correct mobile number', 3000);
      return
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
    formvalues.id = UserData.id



    this.apiService.Common_POST('/profile', formvalues).subscribe((results) => {
      if (results.statusCode == 200) {

        debugger
        localStorage.setItem('UserData', JSON.stringify(results.data));
        this.apiService.presentToast(results.message, 3000);
        localStorage.setItem('isLogged', 'true');
        this.router.navigate(['']);
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




      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });


  }

  GetCitis(id: any) {
    console.log(id.value, 'state id');
    //------------Get Data CIties------------------------------------------

    this.apiService.Common_GET('/findCityByState/' + id.value).subscribe((results) => {
      if (results.statusCode == 200) {
        this.Cities = results.data;
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

    this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {

        setTimeout(() => {
          env.ProviderData = results.data;
        }, 5000);

      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }


}
