import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  infoComercio = inject(InfoService)

  estado = '-translate-x-full'
  overlay:string = 'hidden'
  carrito:string = 'hidden'

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
