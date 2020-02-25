import { Component, OnInit } from '@angular/core';
interface OrderRestaurant {
  orderId: number;
  restaurantName: string;
  orderContent: string;
  orderPrice: number;
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
    let orderSingle: OrderRestaurant = {orderId: 0, restaurantName: '', orderContent: '', orderPrice: 0, orderDate: '', restaurantIcon: ''};
    let ordersCurrentUser: any[];
    let restaurants = [];
    ordersCurrentUser = JSON.parse(window.sessionStorage.getItem('ordersCurrentUser'));
    restaurants = JSON.parse(window.sessionStorage.getItem('allRestaurants'));
    ordersCurrentUser.forEach(item => {
      orderSingle = {orderId: 0, restaurantName: '', orderContent: '', orderPrice: 0, orderDate: '', restaurantIcon: ''};
      orderSingle.orderId = item.id;
      orderSingle.orderContent = item.content;
      orderSingle.restaurantName = restaurants.filter(restaurant => restaurant.id === parseInt(item.restaurantId, 10))[0].name;
      orderSingle.restaurantIcon = restaurants.filter(restaurant => restaurant.id === parseInt(item.restaurantId, 10))[0].img;
      orderSingle.orderPrice = item.price;
      orderSingle.orderDate = item.date;
      this.orders.push(orderSingle);
    });
  }

}
