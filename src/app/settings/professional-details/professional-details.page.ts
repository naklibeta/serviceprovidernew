import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.page.html',
  styleUrls: ['./professional-details.page.scss'],
})
export class ProfessionalDetailsPage implements OnInit {

  public AllDegress: any = [];
  public ProviderData: any = {};

  constructor(public apiService: ApiService, public router: Router, public camera: Camera) { }

  ngOnInit() {

    this.GetDegrees();
    this.GetProviderData();
  }

  UpdateProNow(values: any) {

    let ProviderId = this.apiService.Get_ProviderId();

    let formData: FormData = new FormData();
    formData.append('occupation', values.occupation);
    formData.append('education', values.education);
    formData.append('degree', values.degree);
    formData.append('aboutUs', values.aboutUs);
    formData.append('gstin', values.gstin);
    formData.append('providerId', ProviderId);


    this.apiService.Common_POST('/qualification', formData).subscribe((results) => {
      if (results.statusCode == 200) {

      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });


  }


  GetDegrees() {


    this.apiService.Common_GET('/listqualification').subscribe((results) => {
      if (results.statusCode == 200) {
        this.AllDegress = results.data;
      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }

  GetProviderData() {


    this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.ProviderData = results.data;
      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }


  StartCamera() {

    debugger
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      console.log(imageData, 'imageData');
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image, 'base64Image');
    }, (err) => {
      // Handle error
    });
  }

}
