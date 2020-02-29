import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
interface RecipeInfo {
  name: string;
  price: number;
}
interface OrderInfo {
  orderDate: string;
  recipes: RecipeInfo[];
  orderId: number;
  priceTotal: number;
  restaurantName: string;
  restaurantAddress: string;
}
@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.page.html',
  styleUrls: ['./order-info.page.scss'],
})
export class OrderInfoPage implements OnInit {
  orderInfo: OrderInfo = {
    orderDate: '', recipes: [], orderId: 0,
    priceTotal: 0, restaurantName: '', restaurantAddress: ''};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const ordersCurrentUserTrans: any[] = JSON.parse(window.sessionStorage.getItem('ordersCurrentUserTrans'));
    const restaurants: any[] = JSON.parse(window.sessionStorage.getItem('allRestaurants'));
    this.route.queryParams.subscribe( params => {
      const orderCurrent = ordersCurrentUserTrans.filter(order => order.orderId === parseInt(params.id, 10))[0];
      console.log(orderCurrent);
      this.orderInfo.orderDate = orderCurrent.orderDate;
      this.orderInfo.orderId = orderCurrent.orderId;
      this.orderInfo.priceTotal = orderCurrent.orderPriceTotal;
      this.orderInfo.restaurantName = orderCurrent.restaurantName;
      this.setRecipes(orderCurrent, restaurants);
      console.log(this.orderInfo);
    });
  }
  setRecipes(order: any, restaurants: any[]) {
    const arrayRecipeInfo: RecipeInfo[] = [];
    let test: RecipeInfo = {name: '', price: 0};
    order.recipes.forEach(recipe => {
      test = {name: '', price: 0};
      const restaurant = restaurants.filter(res => res.name === order.restaurantName)[0];
      const recipeInfo = restaurant.recipes.filter(rec => rec.name === recipe.name)[0];
      test.name = recipeInfo.name;
      test.price = recipeInfo.price;
      arrayRecipeInfo.push(test);
    });
    this.orderInfo.recipes = arrayRecipeInfo;
  }
}
