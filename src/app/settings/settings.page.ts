import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public SelectFrom: boolean = false;
  public ProviderData: any = {};
  public selectedImage: any = '';
  public selectedFile: any;

  public Qualification: boolean = false;
  public TrainingFilled: boolean = false;
  public RefAdded: boolean = false;

  constructor(public apiService: ApiService, public router: Router, public alertController: AlertController, public camera: Camera) { }

  ngOnInit() {


  }





  ionViewDidEnter() {
    console.log('view changes');
    this.GetProviderData();
  }





  ProfessionalDetails() {
    this.router.navigate(['/professional-details']);
  }

  async logout() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Logout !',
      message: 'Are you sure, do you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',

          handler: (blah) => {

          }
        }, {
          text: 'Yes',
          handler: () => {

            localStorage.removeItem('UserData');
            localStorage.removeItem('isLogged');
            localStorage.removeItem('selectedCategories');
            this.router.navigate(['/otp-verify']);


          }
        }
      ]
    });

    await alert.present();

  }

  kyc() {
    this.router.navigate(['/kyc']);
  }

  reference() {
    this.router.navigate(['/reference']);
  }

  training() {
    this.router.navigate(['/schedule-training']);
  }

  GetProviderData() {

    this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.ProviderData = results.data;

        debugger

        //---------------Set Flags--------------------------
        if (this.ProviderData.degree && this.ProviderData.education) {
          this.Qualification = true;
        } else {
          this.Qualification = false;
        }

        let TrainingData = results.trainingData;

        if (TrainingData) {
          if (TrainingData.date && TrainingData.time) {
            this.TrainingFilled = true;
          } else {
            this.TrainingFilled = false;
          }
        } else {
          this.TrainingFilled = false;
        }

        if (this.ProviderData.mobile1 && this.ProviderData.mobile2) {
          this.RefAdded = true;
        } else {
          this.RefAdded = false;
        }

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
      this.apiService.showLoader('Please wait, uploading..');
      setTimeout(() => {

        env.UploadNow();

      }, 3000);
    }, (err) => {

    });
  }

  UploadNow() {
    let ProviderId = this.apiService.Get_ProviderId();

    let formData: FormData = new FormData();

    formData.append('providerId', ProviderId);
    formData.append('file', this.selectedFile);


    this.apiService.Common_POST('/uploadProviderImage', formData).subscribe((results) => {
      if (results.statusCode == 200) {
        this.apiService.presentToast(results.message, 3000);
      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
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
