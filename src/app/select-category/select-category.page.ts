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
  public OrgCategoryData = [];
  public SelectedCategoryData = [];
  public SelectedCategories: any = [];

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.apiService.showLoader('Please wait, getting categories..');
    this.GetSelectionOptions();

    let catSelected = localStorage.getItem('selectedCategories');
    this.SelectedCategories = JSON.parse(catSelected);

    if (this.SelectedCategories) {
      this.SelectedCategoryData = this.SelectedCategories;
    }




  }


  SetSelected() {

    if (!this.SelectedCategories) {
      return;
    }
    let env = this;
    env.CategoryData.forEach(function (valueCat, i) {
      var check = 0;
      //--loop over sub cats-------------------------------
      let SubCats = valueCat.serviceDetails;
      SubCats.forEach(function (SubCatsValue, j) {

        var results = env.SelectedCategories.filter(function (entry) { return SubCatsValue.name == entry.name; });
        if (results.length != 0) {
          env.CategoryData[i].serviceDetails[j].selected = true;
          check++;
        }

        //-----Check All Subcats Selected--------
      });
      if (check == SubCats.length) {
        env.CategoryData[i].selected = true;
      }
      console.log(env.CategoryData);


    });

  }


  GetSelectionOptions() {

    //------------Get Data and fill all three select fields------------------------------------------

    this.apiService.Common_GET('/getService').subscribe((results) => {
      if (results.statusCode == 200) {
        this.OrgCategoryData = this.CategoryData = results.data;


        let env = this;

        setTimeout(() => {
          env.SetSelected();
        }, 1000);


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


  SelectAllSubcats(i: any, targetval) {

    let allEl: any = document.querySelectorAll(".subcat-checkbox-" + i);
    allEl.forEach(element => {
      if (targetval.checked == true && element.ariaChecked == 'true' || targetval.checked == false && element.ariaChecked == 'false') {
      } else {
        element.click();
      }
    });

  }


  SearchByName(target: any) {

    let valueSearch = target.value;

    if (valueSearch.length <= 2) {
      this.CategoryData = this.OrgCategoryData;
      return;
    }

    this.CategoryData = this.OrgCategoryData.filter(item => {

      return item.subCateName.startsWith(valueSearch);

    });

  }

  Back() {

    localStorage.setItem('selectedCategories', JSON.stringify(this.SelectedCategoryData));
    this.router.navigate(['/register']);

  }

}
