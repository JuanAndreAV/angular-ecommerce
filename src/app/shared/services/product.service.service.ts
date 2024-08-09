import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  

   API_URL: string = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}
 
  
    
  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

}
