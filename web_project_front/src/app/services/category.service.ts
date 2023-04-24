import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category, Product} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private client: HttpClient) { }

  BASE_URL = "http://127.0.0.1:8000/api/categories/"

  getCategories(): Observable<Category[]>{
    return this.client.get<Category[]>(`${this.BASE_URL}`)
  }

  getCategoryDetail(id: number): Observable<Category>{
    return this.client.get<Category>(`${this.BASE_URL}${id}/`)
  }
  getCategoryProducts(id: number): Observable<Product[]>{
    return this.client.get<Product[]>(`${this.BASE_URL}${id}/products/`)
  }
}
