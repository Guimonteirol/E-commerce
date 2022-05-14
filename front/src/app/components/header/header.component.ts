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


  constructor(public cartModal: MatDialog) {}

  ngOnInit(): void {
  }

  openCart(){
    this.cartModal.open(CartComponent)
  }



}
