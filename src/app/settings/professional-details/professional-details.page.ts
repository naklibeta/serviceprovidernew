import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.page.html',
  styleUrls: ['./professional-details.page.scss'],
})
export class ProfessionalDetailsPage implements OnInit {

  public AllDegress: any = [];
  public ProviderData: any = {};
  public SelectFrom: boolean = false;

  public selectedImage: any = '';
  public selectedFile: any;


  constructor(public apiService: ApiService, public router: Router, public camera: Camera, public alertController: AlertController) { }

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

    if (this.selectedFile) {
      formData.append('certificate', this.selectedFile);
    }


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

    if (this.SelectFrom == false) {
      var options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
    } else {
      var options: CameraOptions = {
        quality: 50,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        allowEdit: true
      }
    }

    let env = this;

    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData, 'imageData');
      this.selectedImage = 'data:image/jpeg;base64,' + imageData;
      console.log(this.selectedImage, 'base64Image');
      env.getBase64(this.selectedImage);
    }, (err) => {

    });
  }


  getBase64(url) {

    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "filecertificate", { type: "image/jpeg" });
        this.selectedFile = file;
      })
  }



  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Please Select!',
      message: 'Upload image using?',
      buttons: [
        {
          text: 'Gallery',
          role: 'cancel',
          cssClass: 'secondary',

          handler: (blah) => {
            this.SelectFrom = true;
            this.StartCamera();
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Camera',
          handler: () => {
            this.SelectFrom = false;
            this.StartCamera();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }





}
