import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {

  }

  ProfessionalDetails() {
    this.router.navigate(['/professional-details']);
  }

}
