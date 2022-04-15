import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreServicesService {

  private readonly url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  showStore(){
    return this.http.get<any>(`${this.url}/store/show`)
  }
}
