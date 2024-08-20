import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductRepresentation} from "../models/product-representation";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "https://fakestoreapi.com/";

  constructor(
    private http: HttpClient
  ) { }

  getAllProductsWithLimit(limit: number = 5) {
    const productUrl1: string = this.baseUrl + "products?limit=" + limit;
    const productUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productUrl);
  }

  createProduct(product: ProductRepresentation) {
    const productUrl: string = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productUrl, product);
  }
}
