import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cart } from './../../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart$!: Observable<any>;
  quantCart: any;
  totalCompra: number = 0;
  contador: number = 0;
  quantidade: number = 0;
  produtos: any;
  totalFinal: number = 0;

  constructor(
    private cartService: CartServicesService,
    @Inject(MAT_DIALOG_DATA) public content: string
  ) {}

  ngOnInit(): void {
    this.getCart();
  }

  btnplus(_id: string) {
    let produto = this.quantCart.find((p: any) => {
      return p._id === _id;
    });
    this.cart$ = this.cartService.showCart();
    produto.quant = produto.quant + 1;
    this.quantidade = produto.quant * produto.price;
    produto.total = this.quantidade;

    this.totalFinal = produto.price + this.totalFinal;
  }

  btnmminus(_id: string) {
    let produto = this.quantCart.find((p: any) => {
      return p._id === _id;
    });
    produto.quant = produto.quant - 1;
    this.quantidade = produto.quant * produto.price;
    produto.total = this.quantidade;

    this.totalFinal = this.totalFinal - produto.price;
  }

  getCart() {
    this.cart$ = this.cartService.showCart();
    this.cart$.forEach((u) => {
      this.contador;
      this.quantCart = u;
      for (let i of this.quantCart) {
        this.totalCompra = i.price + this.totalCompra;
        this.totalFinal = i.price + this.totalFinal;
      }
    });
  }

  deleteProduct(_id: string, size: string) {
    const products: Cart = { _id, size };
    this.cartService.deleteCart(products).subscribe({
      next: (i: any) => {},
      complete: () => {},
    });
    this.cart$.forEach((u) => {
      this.quantCart = u;
      this.quantCart.filter((i: any) => i._id != _id);
    });
    let produto = this.quantCart.find((p: any) => {
      return p._id === _id;
    });
    this.totalFinal = this.totalFinal - produto.total;
  }
}
