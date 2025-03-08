import { Injectable, signal } from '@angular/core';
import { Product } from '../../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
productsInCart = signal<Product[]>([]);
stock: number = 1;
  constructor() { }

  addToCart(item: Product): void {
    const existingProduct = this.productsInCart().find((p) => p._id === item._id);
  
    if (existingProduct) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      this.incrementQuantity(item._id);
    } else {
      // Si no está en el carrito, añádelo con cantidad inicial
      this.productsInCart.update((products) => [
        ...products,
        { ...item,  quantity: 1, totalPrice: item.price }, // Añade el producto con cantidad inicial de 1
      ]);
    }
  }
  
  incrementQuantity(productId: string): void {
    this.productsInCart.update((products) =>
      products.map((p) =>
        p._id === productId ? { ...p, quantity: p.quantity! + 1, totalPrice: p.price * (p.quantity! + 1) } : p)
    );
  }
  decrementQuantity(productId: string): void {
    this.productsInCart.update((products) =>
      products.map((p) =>
        p._id === productId ? { ...p, quantity: p.quantity! - 1,  totalPrice: p.price * (p.quantity! - 1) } : p).filter((p) => p.quantity! > 0)
    );
  };
  getQuantity(productId: string) {
    const product = this.productsInCart().find((p) => p._id === productId);
    return product ? product.quantity : 0;
  }
getTotalPrice(): number{
  return this.productsInCart().reduce((precio, item)=> precio + item.totalPrice, 0)
 };

getItemPrice(){
  return this.productsInCart().map(item => item.price * item.quantity!)
}

// getCantidad(): number{
//   return this.productsInCart.reduce((total, item)=> item.cantidad, 0)
// }



eliminarProducto(item: Product){
 this.productsInCart().filter(producto=> producto !== item)
  }

// cantidadProducto(cantidad: number){
//   this.cantidad = cantidad
// }


}
