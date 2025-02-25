import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product_interface';
import { ProductRequest } from '../interfaces/product_request';

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

  // Metodo POST per creare un nuovo elemento
  createProduct(data: ProductRequest): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl + this.endPoint, data);
  }

  // Metodo PATCH per aggiornare parzialmente un elemento
  updateProduct(id: number, data: ProductRequest): Observable<Product> {
    return this.httpClient.patch<Product>(`${this.baseUrl+ this.endPoint}/${id}`, data);
  }

  // Metodo DELETE per rimuovere un elemento
  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.baseUrl+ this.endPoint}/${id}`);
  }
  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl+ this.endPoint}/${id}`);
  }


}
