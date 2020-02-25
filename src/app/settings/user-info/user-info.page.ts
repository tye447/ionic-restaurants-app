import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  userInfo: any;
  constructor(public route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.userInfo = JSON.parse(sessionStorage.getItem('currentUser'));
  }
  dayOrder = (a, b) => {
    if (a.key < b.key) { return b.key; }
  }
  back() {
    this.router.navigateByUrl('tabs/settings').then();
  }

}
