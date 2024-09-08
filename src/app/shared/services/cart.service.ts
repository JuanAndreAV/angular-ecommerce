import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
productsInCart: Product[] = []
  constructor() { }

addToCart(item: Product){
  this.productsInCart.push(item)
}

}
