import { Component, inject, computed, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterModule,Router } from '@angular/router';
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
infocomercio = inject(InfoService);
cartService = inject(CartService);
router = inject(Router);
destacados = computed(()=> this.productService.destacados()) 


filter(item: string){
  this.router.navigate(['/productos'])
  console.log(item)
}



}
