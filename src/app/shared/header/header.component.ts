import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoService } from '../services/info.service';
import { CarritoComponent } from '../../pages/carrito/carrito.component';
import { CartService } from '../services/cart.service';
import { Product } from '../../interfaces/product';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  infoComercio = inject(InfoService)
  authService = inject(AuthService)
  estado = '-translate-x-full'
  overlay:string = 'hidden'
  carrito:string = 'hidden'
  precioTotal: Product[] = []

constructor(public cartService: CartService){
  
}






  sideMenu():void{
   
      this.estado = ''
      this.overlay = ''
  }
  hide():void{
    this.estado = "-translate-x-full"
    this.overlay = "hidden"
    this.carrito = "hidden"
  }
  cartBtn():void{
    this.carrito = ''
    this.overlay = ''
  }

}
