import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.page.html',
  styleUrls: ['./restaurant-info.page.scss'],
})
export class RestaurantInfoPage implements OnInit {
  restaurantInfo: any;
  restaurants: any;
  constructor(public route: ActivatedRoute) {}
  ngOnInit() {
    // this.allRestaurants = window.sessionStorage.getItem('allRes');
    // this.allRestaurants = sessionStorage.getItem('allRestaurants');
    this.restaurants = JSON.parse(window.sessionStorage.getItem('allRes'));
    this.route.queryParams.subscribe( params => {
      this.getRestaurantInfo(this.restaurants, params);
    });
  }
  getRestaurantInfo(restaurants: any, param: any) {
    this.restaurantInfo = restaurants
        .filter(c => c.name === param.name)
        .filter(c => c.formatted_address === param.formatted_address)[0];
  }
  dayOrder = (a, b) => {
    if (a.key < b.key) { return b.key; }
  }

}
