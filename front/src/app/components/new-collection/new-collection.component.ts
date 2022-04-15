import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StoreServicesService } from 'src/app/services/store-services.service';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.scss']
})
export class NewCollectionComponent implements OnInit {

  store$!: Observable<any>;

  constructor(private storeService: StoreServicesService) { }

  ngOnInit(): void {
    this.getStore()
  }

  getStore(){
    this.store$ = this.storeService.showStore()
  }
}
