import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  name: any;
  password: any;
  userInfo: any;
  ordersCurrentUser: any;
  constructor(public route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
  }
  ionViewWillEnter() {
    sessionStorage.clear();
    this.name = '';
    this.password = '';
  }
  logForm() {
    this.buildLoginForm();
    this.get_current_user('./assets/infoUser.json');
  }
  buildLoginForm() {
    this.loginForm = this.fb.group({
          name: [this.name],
          password: [this.password],
        }
    );
  }
  get_current_user(url: string) {
    fetch(url).then(r => r.json()).then(json => {
      this.userInfo = json
          .filter(c => c.name === this.loginForm.value.name)
          .filter(c => c.password === this.loginForm.value.password)[0];
      this.checkUserData();
    });
  }
  checkUserData() {
    if (this.userInfo === undefined) {
      alert('Invalid name or password: Please try again');
    } else {
      this.set_data().then();
    }
  }
  async set_data() {
    await fetch('./assets/restaurants.json')
        .then(r => r.json())
        .then(json => {
          window.sessionStorage.setItem('allRestaurants', JSON.stringify(json));
        });
    await fetch('./assets/orders.json').then(r => r.json()).then(json => {
      this.ordersCurrentUser = json.filter(c => c.userId === parseInt(this.userInfo.id, 10));
      this.userInfo.ordersCount = this.ordersCurrentUser.length;
      window.sessionStorage.setItem('currentUser', JSON.stringify(this.userInfo));
      window.sessionStorage.setItem('ordersCurrentUser', JSON.stringify(this.ordersCurrentUser));
    });
    await this.router.navigateByUrl('tabs/settings');
  }

}
