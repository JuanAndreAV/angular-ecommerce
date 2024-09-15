import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
productsInCart: Product[] = [];
cantidad: number = 1;
  constructor() { }

addToCart(item: Product, cantidad: number){
  this.productsInCart.push( {...item, cantidad} )
}
getTotalPrice(): number{
 return this.productsInCart.reduce((precio, item)=> precio + item.price, 0)
}
getCantidad(): number{
  return this.productsInCart.reduce((total, item)=> item.cantidad, 0)
}
eliminarProducto(item: Product){
 this.productsInCart = this.productsInCart.filter(producto=> producto !== item)
}

cantidadProducto(cantidad: number){
  this.cantidad = cantidad
}


}
