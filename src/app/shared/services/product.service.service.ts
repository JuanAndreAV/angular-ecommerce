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
 public destacados = computed(()=> this.state().products.map(products=>products).slice(0,3) )

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

  registerProduct(product: Product){
    return this.http.post<Product>(this.API_URL, product, {
      headers: ({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }) 
  };

  editProduct(id: any, product: Product){
    return this.http.patch<Product>(`${this.API_URL}/${id}`, product)
  }
  
 
  
 

}
