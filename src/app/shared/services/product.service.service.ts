import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private http = inject(HttpClient);
  state = signal<{loading: boolean, products: Product[]}>({
    loading: true,
    products: [],
  });
 public products = computed(()=>this.state().products)

   API_URL: string = `${environment.API_URL}/products` ;

  constructor() {
    this.http.get<Product[]>(this.API_URL)
    .subscribe(response=>{
      this.state.set({
        loading: false,
        products: response
      })
    })
  }
  
 
  
 

}
