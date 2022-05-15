import { Cart } from './../../models/cart';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreServicesService } from 'src/app/services/store-services.service';
import { NgForm } from '@angular/forms';
import { CartServicesService } from 'src/app/services/cart-services.service';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.scss']
})
export class NewCollectionComponent implements OnInit {

  @ViewChild('create') create!: NgForm;
  store$!: Observable<any>;
  cart!: Cart;
  vetor: any;
  constructor(private storeService: StoreServicesService,
    private cartService: CartServicesService) { }

  ngOnInit(): void {
    this.getStore()

  }

  getStore(){
    this.store$ = this.storeService.showStore()
   this.store$.subscribe((e)=>{
     this.vetor = e
     this.vetor.forEach((e:any) => {
     });
    })

  }

  addProduct(_id:string, size:string){
    console.log(_id)
    const products: Cart = {_id, size}
    console.log(products)
    this.cartService.addCart(products)
    .subscribe({
      next:(i: any) =>{
      },
      complete:()=>{}
    })
  }
}
