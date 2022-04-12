import { Injectable } from '@angular/core';
import { Cart } from './../models/cartModel'
import { HttpClient } from '@angular/common/http';
import { first, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getCart(){
    return this.http.get<Cart>(`${this.url}/show`)
    .pipe(
      first(),
      tap(cart => cart)
    )
  }

  createCart(title: string, price: number, size: string){
    return this.http.post<Cart>(`${this.url}/add`, {title, price, size})
  }


}
