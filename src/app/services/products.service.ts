import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product_interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = "https://jsonserver-ddfcafbub9eeg0dk.westeurope-01.azurewebsites.net/";
  endPoint: string = "/products"

  constructor(public httpClient: HttpClient) { }

  
  fetchAllProducts(): Observable<Product[]> {
    return this.httpClient.get(this.baseUrl + this.endPoint) as Observable<Product[]>
  }
}
