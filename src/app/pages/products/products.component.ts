import { Component, Inject, inject, OnInit, Signal } from '@angular/core';
import { ProductServiceService } from '../../shared/services/product.service.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
 public data : any 

  constructor(private productService: ProductServiceService) { 
    
  }



  ngOnInit(): void {
    this.mostrarProductos()
  }
 mostrarProductos(){
  this.productService.getData().subscribe(
    (response) => {
      this.data = response;
      console.log(this.data); // Puedes ver los datos en la consola
    },
    (error) => {
      console.error('Error al obtener los datos:', error);
    }
  );
 }
 
 
}
