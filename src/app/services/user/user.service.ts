import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getAllUsers(url: string) {
    return this.http.get<any[]>(url).pipe();
  }
}
