import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from './../cart/cart.component';
import { CartServicesService } from 'src/app/services/cart-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItems: number = 0;

  constructor(public cartModal: MatDialog,
    private cartService: CartServicesService,
    ) {
      this.cartService.showCart().subscribe(res => {
        this.totalItems = res.length
        })
    }


  ngOnInit(): void {

  }

  openCart(){
    this.cartModal.open(CartComponent)
  }



}
