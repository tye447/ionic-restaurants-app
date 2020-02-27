import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  corsUrl = 'https://cors-anywhere.herokuapp.com/';
  baseUrlPlaces = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
  keyAPI = 'AIzaSyAhf3JleYpal9S-xouJYH8lf7Dvz5Y2Nko';
  baseUrlPlaceDetail = 'https://maps.googleapis.com/maps/api/place/details/json';
  fields = 'name';
  baseUrlLocation = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json';
  constructor(private http: HttpClient, private params1: HttpParams, private params2: HttpParams) {}
  getLocation(search: string) {
    const urlLocation: string = this.corsUrl + this.baseUrlLocation;
    const urlTest = new URL(urlLocation);
    const test = new URLSearchParams();
    test.set('input', search);
    test.set('inputtype', 'textquery');
    test.set('fields', 'geometry');
    test.set('key', this.keyAPI);
    urlTest.search = new URLSearchParams(test).toString();
    return this.http.get('' + urlTest).pipe();
  }
  getAllRestaurantLyon(lat: string, lng: string) {
    const urlRestaurant: string = this.corsUrl + this.baseUrlPlaces;
    const urlTest = new URL(urlRestaurant);
    const test = new URLSearchParams();
    test.set('location', lat + ',' + lng);
    test.set('radius', '10');
    test.set('type', 'restaurant');
    test.set('keyword', 'restaurant');
    test.set('key', this.keyAPI);
    urlTest.search = new URLSearchParams(test).toString();
    return this.http.get('' + urlTest).pipe();
  }
  getPlaceName(placeid: string, field: string ) {
    const urlPlace: string = this.corsUrl + this.baseUrlPlaceDetail;
    const urlTest = new URL(urlPlace);
    const test = new URLSearchParams();
    test.set('placeid' , placeid);
    test.set('fields' , field);
    test.set('key', this.keyAPI);
    urlTest.search = new URLSearchParams(test).toString();
    return this.http.get('' + urlTest).pipe();
  }
}
