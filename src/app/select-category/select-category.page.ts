import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.page.html',
  styleUrls: ['./select-category.page.scss'],
})
export class SelectCategoryPage implements OnInit {

  public CategoryData = [];
  public SelectedCategoryData = [];

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.GetSelectionOptions();
  }


  GetSelectionOptions() {

    //------------Get Data and fill all three select fields------------------------------------------

    this.apiService.Common_GET('/getService').subscribe((results) => {
      if (results.statusCode == 200) {
        this.CategoryData = results.data;
      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });


  }


  SelectCategory(subcategorydata: any) {


    let MakeObject = {
      id: subcategorydata.id,
      name: subcategorydata.name,
    }

    var exists = this.SelectedCategoryData.filter(function (o) {
      return o.id == subcategorydata.id;
    });

    if (exists.length == 0) {
      //----push inside--------
      this.SelectedCategoryData.push(MakeObject);
    } else {
      //remove already exists -------------------------------
      this.SelectedCategoryData = this.SelectedCategoryData.filter(function (obj) {
        return obj.id !== subcategorydata.id;
      });
    }

    console.log(this.SelectedCategoryData);

  }


  SelectAllSubcats(i: any) {

    let allEl: any = document.querySelectorAll(".subcat-checkbox-" + i);

    allEl.forEach(element => {
      element.click();
    });

  }

  Back() {

    localStorage.setItem('selectedCategories', JSON.stringify(this.SelectedCategoryData));
    this.router.navigate(['/register']);

  }

}
