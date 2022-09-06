import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http : HttpClient) { }

  getProducts(activeMenuLink: string): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/product/"+activeMenuLink);
  }

  getRecommandedPlats(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/product/"+'recommanded');
  }

}
