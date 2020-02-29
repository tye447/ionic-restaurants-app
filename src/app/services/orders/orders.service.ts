import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) { }
  getAllOrders(url: string) {
    return this.http.get<any[]>(url).pipe();
  }
}
