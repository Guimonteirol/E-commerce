import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  private readonly url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addCart(){
    return this.http.get<any>(`${this.url}/addCart`)
    .pipe(
      map( i => i.cart)
    )
  }

  showCart(){
    return this.http.get<any>(`${this.url}/showCart`)
    // .pipe(
    //   map( i => i.cart)
    // )
  }

}
