import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartServicesService } from 'src/app/services/cart-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$! : Observable<any>;

  constructor(private cartService : CartServicesService) { }

  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    this.cart$ = this.cartService.showCart()
    this.cart$.forEach((u)=>{
      console.log(u)
    })
  }

}
