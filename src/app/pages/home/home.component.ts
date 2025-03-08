import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoService } from '../../shared/services/info.service';
import { ProductServiceService } from '../../shared/services/product.service.service';
import { CartService } from '../../shared/services/cart.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
public productService = inject(ProductServiceService)  
infocomercio = inject(InfoService)
cartService = inject(CartService)
destacados = computed(()=> this.productService.destacados()) 
//debo incluir el endpoint para obtener productos destacados
//injectar el servicio de carrito
filter(item: string){
  console.log(item)
}



}
