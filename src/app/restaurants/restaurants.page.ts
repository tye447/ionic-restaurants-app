import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../services/restaurants.service';
interface Test {
  formatted_address: string;
  formatted_phone_number: string;
  name: string;
  rating: number;
  user_ratings_total: number;
  website: string;
  weekday_text: string;
}
const tests: Test[] = [];
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
    inputAddress: any;
  restaurants: any;
  resultTest: any;
  resultLocation: any;
  constructor(private restaurantsService: RestaurantsService) {
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
     // this.services();
  }
  search(inputAddress){
      this.serviceLocation(inputAddress);
  }
  services() {
      this.serviceLocation(this.inputAddress);
  }
  serviceLocation(inputAddress) {
      const test = JSON.parse(window.sessionStorage.getItem('location'));
      this.restaurantsService.getLocation(inputAddress).subscribe(r => {
          const locationJSON = JSON.parse( JSON.stringify(r));
          const location = locationJSON.candidates[0].geometry.location;
          const locationString = location.lat + ',' + location.lng;
          this.resultLocation = JSON.stringify(locationString);
          window.sessionStorage.setItem('location', this.resultLocation);
          this.serviceRestaurant(location.lat, location.lng);
      });
  }
  serviceRestaurant(lat: string, lng: string) {
      this.restaurantsService.getAllRestaurantLyon(lat, lng).subscribe(r => {
          this.resultTest = JSON.stringify(r);
          this.createTest(tests, this.resultTest);
      });
  }
  createTest(output: Test[], input: any) {
    output = [];
    const inputJSON = JSON.parse(this.resultTest);
    const outputSingle: Test = {
      name: '',
      rating: 0,
      formatted_address: '',
      weekday_text: '',
      formatted_phone_number: '',
      website: '',
      user_ratings_total: 0,
    };
    inputJSON.results.forEach(item => {
      this.affectation(output, item, outputSingle);
    });
  }
  affectation(output, item, outputSingle) {
      this.restaurantsService
          .getPlaceName(item.place_id, 'name,rating,formatted_phone_number,formatted_address,opening_hours,website,user_ratings_total')
          .subscribe(r => {
              const resultDetail = JSON.stringify(r);
              const resultDetailJSON = JSON.parse(resultDetail).result;
              outputSingle = {
                  name: '',
                  rating: 0,
                  formatted_address: '',
                  weekday_text: '',
                  formatted_phone_number: '',
                  website: '',
                  user_ratings_total: 0,
              };
              outputSingle.formatted_address = resultDetailJSON.formatted_address;
              outputSingle.formatted_phone_number = resultDetailJSON.formatted_phone_number;
              outputSingle.name = resultDetailJSON.name;
              outputSingle.rating = resultDetailJSON.rating;
              outputSingle.user_ratings_total = resultDetailJSON.user_ratings_total;
              outputSingle.website = resultDetailJSON.website;
              if (resultDetailJSON.opening_hours != null) {
                  outputSingle.weekday_text = resultDetailJSON.opening_hours.weekday_text;
              }
              output.push(outputSingle);
              this.restaurants = output;
              window.sessionStorage.setItem('allRes', JSON.stringify(output));
          });
  }
  loadAllRestaurants() {
    this.restaurants = JSON.parse(window.sessionStorage.getItem('allRestaurants'));
  }
}
