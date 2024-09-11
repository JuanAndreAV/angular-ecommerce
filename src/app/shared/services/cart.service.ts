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
getTotalPrice(): number{
 return this.productsInCart.reduce((precio, item)=> precio + item.price, 0)
}
eliminarProducto(item: Product){
 this.productsInCart = this.productsInCart.filter(producto=> producto !== item)
}


}
