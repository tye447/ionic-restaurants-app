import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  restaurants: any;
  constructor() {
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.loadAllRestaurants();
  }
  loadAllRestaurants() {
    this.restaurants = JSON.parse(window.sessionStorage.getItem('allRestaurants'));
  }
}
