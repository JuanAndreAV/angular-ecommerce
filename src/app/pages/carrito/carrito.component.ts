import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
 whatsAppLink = 573043284108
  encodedMessage: String=''
 
  constructor(public cartService: CartService){
    
  }

  mensajePago(){
    const mensaje = this.cartService.productsInCart.map(item => 
  `\n${item.title}\nPrecio: $${item.price}.\n`
  ).join('');
    return this.encodedMessage = encodeURIComponent(mensaje);
    
  }
  
pago(){
   
  return this.cartService.productsInCart.reduce((precio, item)=> precio + item.price, 0)
 
}
eliminarProducto(item: Product){
  this.cartService.eliminarProducto(item)
  
  //return this.cartService.productsInCart
}

  }
