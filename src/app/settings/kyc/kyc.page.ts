import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.page.html',
  styleUrls: ['./kyc.page.scss'],
})
export class KycPage implements OnInit {

  public ProviderData: any = {};

  public pan_selected_file: any;
  public SelectFrom: boolean = false;
  public inValidAcc: boolean = false;

  //------Photo Variabled--------------------

  public selectedpanImage: any = '';
  public selectedpanFile: any;

  public selected_aFront_Image: any = '';
  public selected_aFront_File: any;

  public selected_aBack_Image: any = '';
  public selected_aBack_File: any;

  constructor(public router: Router, public apiService: ApiService, public alert: AlertController, public camera: Camera, public loadingController: LoadingController) { }

  ngOnInit() {

    this.GetProviderData();
    this.apiService.showLoader('Please wait, getting your details..');
  }

  UpdateKYCNow(values: any) {

    if (!this.ProviderData.aadharCardFront && !this.selected_aFront_Image) {
      this.apiService.presentToast('Please select Aadhar Card Front Image', 3000);
      return;
    }

    if (!this.ProviderData.aadharCardBack && !this.selected_aBack_Image) {
      this.apiService.presentToast('Please select Aadhar Card Back Image', 3000);
      return;
    }

    if (this.ProviderData.cacNumber != this.ProviderData.ac_number) {
      this.apiService.presentToast('Account number does not match!', 3000);
      return;
    }




    this.showLoader('Please wait, updating details..');

    let ProviderId = this.apiService.Get_ProviderId();

    let formData: FormData = new FormData();
    formData.append('ac_name', values.name);
    formData.append('bank', values.bank);
    formData.append('ifsc', values.ifsc);
    formData.append('branch', values.branch);
    formData.append('ac_number', values.ac_number);
    formData.append('providerId', ProviderId);

    if (this.selectedpanFile) {
      formData.append('pancard', this.selectedpanFile);
    }

    if (this.selected_aFront_File) {
      formData.append('aadharCardFront', this.selected_aFront_File);
    }

    if (this.selected_aBack_File) {
      formData.append('aadharCardBack', this.selected_aBack_File);
    }


    this.apiService.Common_POST('/kyc', formData).subscribe((results) => {
      if (results.statusCode == 200) {
        this.hideLoader();
        this.GetProviderData();

        this.router.navigate(['/tabs/settings']);

        this.apiService.presentToast(results.message, 3000);
      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.hideLoader();
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });

  }


  GetProviderData() {


    this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
      if (results.statusCode == 200) {
        this.ProviderData = results.data;
        if (results.data) localStorage.setItem('UserData', JSON.stringify(results.data));

        if (this.ProviderData.ac_number) {
          this.ProviderData.cacNumber = this.ProviderData.ac_number;
        }

      } else {
        this.apiService.presentToast(results.message, 3000);
      }
    }, err => {
      this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    });
  }


  async ChooseImage(type: any) {
    const alert = await this.alert.create({
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
            this.StartCamera(type);
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Camera',
          handler: () => {
            this.SelectFrom = false;
            this.StartCamera(type);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


  StartCamera(type: any) {

    if (this.SelectFrom == false) {
      var options: CameraOptions = {
        quality: 30,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
    } else {
      var options: CameraOptions = {
        quality: 30,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        allowEdit: true
      }
    }

    let env = this;

    this.camera.getPicture(options).then((imageData) => {

      if (type == 'pan') {
        this.selectedpanImage = 'data:image/jpeg;base64,' + imageData;
        env.getBase64(this.selectedpanImage, type);

      } else if (type == 'aFront') {

        this.selected_aFront_Image = 'data:image/jpeg;base64,' + imageData;
        env.getBase64(this.selected_aFront_Image, type);

      } else if (type == 'aBack') {

        this.selected_aBack_Image = 'data:image/jpeg;base64,' + imageData;
        env.getBase64(this.selected_aBack_Image, type);

      }


    }, (err) => {

    });
  }


  getBase64(url, type) {

    let env = this;

    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "filecertificate", { type: "image/jpeg" });


        if (type == 'pan') {
          env.selectedpanFile = file;

        } else if (type == 'aFront') {
          env.selected_aFront_File = file;

        } else if (type == 'aBack') {
          env.selected_aBack_File = file;
        }
      })
  }

  CheckAc(valuetarget: any) {

    let exact = valuetarget.value;

    if (exact != this.ProviderData.ac_number) {
      this.inValidAcc = true;
    } else {
      this.inValidAcc = false;
    }

  }



  showLoader(loaderMsg) {
    this.loadingController.create({
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
      this.loadingController.dismiss();
    }, 1000);
  }

}
