import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  userInfo: any;
  constructor(private router: Router, public alertController: AlertController) { }
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.userInfo = JSON.parse(window.sessionStorage.getItem('currentUser'));
  }
  async logOutAlert() {
    const alert = await this.alertController.create({
      header: 'Log Out',
      message: 'Do you want to log out anyway ? ',
      buttons: [{
        text: 'OK',
        handler: () => {
          sessionStorage.removeItem('currentUser');
          this.router.navigateByUrl('login').then();
        }
      }, {
        text: 'Cancel'
      }]
    });
    await alert.present();
  }
  logOut() {
    this.logOutAlert().then();
  }
}
