import { Component, OnInit } from '@angular/core';
interface OrderRestaurant {
  orderId: number;
  restaurantName: string;
  recipes: any[];
  recipesCount: number;
  orderPriceTotal: number;
  orderDate: string;
  restaurantIcon: string;
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders: OrderRestaurant[];

  constructor() {
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.loadOrdersCurrentUser();
  }
  loadOrdersCurrentUser() {
    this.orders = [];
    let orderSingle: OrderRestaurant = {
      orderId: 0, restaurantName: '', recipes: [],
      recipesCount: 0, orderPriceTotal: 0, orderDate: '', restaurantIcon: ''
    };
    const ordersCurrentUser: any[] = JSON.parse(window.sessionStorage.getItem('ordersCurrentUser'));
    const restaurants: any[] = JSON.parse(window.sessionStorage.getItem('allRestaurants'));
    ordersCurrentUser.forEach(order => {
      orderSingle = {
        orderId: 0, restaurantName: '', recipes: [], recipesCount: 0,
        orderPriceTotal: 0, orderDate: '', restaurantIcon: ''
      };
      orderSingle.orderId = order.id;
      const restaurantOrder = restaurants.filter(restaurant => restaurant.id === parseInt(order.restaurantId, 10))[0]
      orderSingle.restaurantName = restaurantOrder.name;
      orderSingle.restaurantIcon = restaurantOrder.img;
      const recipes: any[] = restaurantOrder.recipes;
      const recipes2 = recipes.filter(recipe => recipe.id === parseInt(order.recipeId[0], 10))[0];
      orderSingle.recipes = this.setRecipes(order, recipes, orderSingle);
      orderSingle.recipesCount = order.recipeId.length;
      orderSingle.orderDate = order.date;
      this.orders.push(orderSingle);
    });
    window.sessionStorage.setItem('ordersCurrentUserTrans', JSON.stringify(this.orders));
  }
  setRecipes(order: any, recipes: any[], orderSingle: any) {
    const test: any[] = [];
    order.recipeId.forEach(rid => {
      const recipeSingle = recipes.filter(recipe => recipe.id === parseInt(rid, 10))[0];
      orderSingle.orderPriceTotal += recipeSingle.price;
      test.push(recipeSingle);
    });
    return test;
  }
}
