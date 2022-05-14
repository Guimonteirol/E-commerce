import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  private readonly url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addCart(products: Cart){
    return this.http.post<any>(`${this.url}/addCart`, products)
  }

  showCart(){
    return this.http.get<any>(`${this.url}/showCart`)
  }

  deleteCart(products: Cart){
    return this.http.post<any>(`${this.url}/deleteCart`, {_id: products._id})
  }

}
