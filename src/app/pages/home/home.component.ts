import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoService } from '../../shared/services/info.service';
import { ProductServiceService } from '../../shared/services/product.service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
public productService = inject(ProductServiceService)  
infocomercio = inject(InfoService)
//debo incluir el endpoint para obtener productos destacados
//injectar el servicio de carrito



}
