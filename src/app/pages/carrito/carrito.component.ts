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

  constructor(public cartService: CartService){}


}
