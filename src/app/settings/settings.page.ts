import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Share } from '@capacitor/share';

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
  public KYCDone: boolean = false;

  constructor(public apiService: ApiService, public router: Router,
    public alertController: AlertController, public camera: Camera, public inappb: InAppBrowser) { }

  ngOnInit() {


  }


  async ShareApp() {
    await Share.share({
      title: 'Share IndianBeta Partner App',
      text: 'Refer IndianBeta Partner app to your known, help us to join new service partners',
      url: 'https://play.google.com/store/apps/details?id=com.service.naklibeta.nakli_beta_service_provider',
      dialogTitle: 'Share app with your friends',
    });
  }



  ionViewDidEnter() {
    this.selectedImage = '';
    this.selectedFile = null;
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

  NavigateNow(pagename) {
    this.router.navigate(['/' + pagename]);
  }

  ShowWebPage(link: any) {

    const browser = this.inappb.create(link);
  }

  GetProviderData() {

    this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.ProviderData = results.data;

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

        //-----------Check KYC------------

        if (this.ProviderData.is_active == 1) {
          this.KYCDone = true;
        } else {
          this.KYCDone = false;
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
