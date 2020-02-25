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
  allRestaurants: any;
  constructor(public route: ActivatedRoute) {}
  ngOnInit() {
    this.checkSessionRestaurantsData();
    this.loadRestaurantsData();
    this.route.queryParams.subscribe( val => {
      this.searchRestaurantData(val);
    });
  }
  checkSessionRestaurantsData() {
    this.allRestaurants = sessionStorage.getItem('allRestaurants');
    this.restaurants = JSON.parse(this.allRestaurants);
  }
  loadRestaurantsData() {
    if (this.restaurants == null) {
      this.read_data('./assets/restaurants.json');
    }
  }
  searchRestaurantData(param: any) {
    this.read_data_param_storage(this.restaurants, param);
  }
  read_data(url: string){
    fetch(url)
        .then(r => r.json())
        .then(json => {
          this.restaurants = json;
          sessionStorage.setItem('allRestaurants', JSON.stringify(json));
        });
  }
  read_data_param_storage(resourcesData: any, param: any) {
    this.restaurantInfo = resourcesData
        .filter(c => c.name === param.name)
        .filter(c => c.address.streetAddress === param.streetAddress)[0];
  }
  dayOrder = (a, b) => {
    if (a.key < b.key) { return b.key; }
  }

}
