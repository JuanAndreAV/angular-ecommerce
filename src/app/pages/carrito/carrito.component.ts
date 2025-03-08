import { Component, inject, computed } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  whatsAppLink = 573043284108
  public cartService = inject(CartService)
  total =  computed(()=> this.cartService.getTotalPrice())
  constructor(){
    
  }

   mensajePago(){
    const mensaje = this.cartService.productsInCart().map(item => `\n${item.name}\n(cantidad: ${item.quantity}).`).join('')
    return encodeURIComponent(mensaje);
    
   }
  


  }
