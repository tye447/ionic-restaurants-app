import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../services/user/user.service';
import {RestaurantsService} from '../services/restaurants/restaurants.service';
import {OrdersService} from '../services/orders/orders.service';
import {RecipesService} from '../services/recipes/recipes.service';

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
  urlUsers = './assets/users.json';
  urlRestaurants = './assets/restaurants.json';
  urlOrders = './assets/orders.json';
  urlRecipes = './assets/recipes.json';
  constructor(public route: ActivatedRoute, private fb: FormBuilder,
              private router: Router, private userService: UserService,
              private restaurantsService: RestaurantsService,
              private ordersService: OrdersService,
              private recipesService: RecipesService) {}
  ngOnInit() {
  }
  ionViewWillEnter() {
    sessionStorage.clear();
    this.name = '';
    this.password = '';
  }
  logForm() {
    this.buildLoginForm();
    this.setCurrentUser(this.urlUsers, this.loginForm.value.name, this.loginForm.value.password);

  }
  buildLoginForm() {
    this.loginForm = this.fb.group({
          name: [this.name],
          password: [this.password],
        }
    );
  }
  setCurrentUser(url: string, name: string, password: string) {
    this.userService.getAllUsers(url).subscribe(res => {
      const results = res.filter(c => c.name === name).filter(c => c.password === password)[0];
      window.sessionStorage.setItem('currentUser', JSON.stringify(results));
      this.checkCurrentUser();
    });
  }
  checkCurrentUser() {
    this.userInfo =  JSON.parse(window.sessionStorage.getItem('currentUser'));
    if (this.userInfo !== null) {
      if (this.userInfo.length === 0) {
        alert('Invalid name or password: Please try again');
        window.sessionStorage.clear();
      } else {
        this.router.navigateByUrl('tabs/restaurants').then(() => {
          this.setRestaurants();
          this.setOrdersByUser();
        });
      }
    }
  }
  setRestaurants() {
    this.restaurantsService.getAllRestaurantJSON(this.urlRestaurants).subscribe(res => {
      window.sessionStorage.setItem('allRestaurants', JSON.stringify(res));
    });
  }
  setOrdersByUser() {
    this.ordersService.getAllOrders(this.urlOrders).subscribe(res => {
      const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'));
      const id = currentUser.id;
      const resOrders = res.filter(c => c.userId === parseInt(id, 10));
      currentUser.ordersCount = resOrders.length;
      window.sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
      window.sessionStorage.setItem('ordersCurrentUser', JSON.stringify(resOrders));
    });
  }
}
