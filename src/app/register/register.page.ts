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

  SelectedCategories: any = [];

  constructor(public apiService: ApiService, public router: Router) {

  }

  ngOnInit() {

    this.GetSelectionOptions();


  }

  ionViewDidEnter() {

    let catSelected = localStorage.getItem('selectedCategories');
    this.SelectedCategories = JSON.parse(catSelected);
  }


  RegisterNow(formvalues: any) {

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



    this.apiService.Common_POST('/register-provider', formvalues).subscribe((results) => {
      if (results.statusCode == 200) {
        localStorage.setItem('UserData', JSON.stringify(results.data));
        localStorage.setItem('isLogged', 'true');
        this.router.navigate(['/dashboard']);
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

}
