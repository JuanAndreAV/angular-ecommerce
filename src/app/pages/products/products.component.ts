import { Component, Inject, inject, OnInit, Signal } from '@angular/core';
import { ProductServiceService} from '../../shared/services/product.service.service';
import { CartService } from '../../shared/services/cart.service';
import { Product } from '../../interfaces/product';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent   {
  
  public productService = inject(ProductServiceService);
  productos: Product[] = this.productService.products();
  cantidad: number = 1
  productosFiltrados: Product[] = [...this.productService.products()]//this.productos.filter((item)=>item.category === 'café' )
  
  filterProduct(producto: string){
    this.productosFiltrados = producto ? this.productService.products().filter((item)=>item.category === producto) : [...this.productService.products()] 
  }
  constructor( public cartService: CartService) { 
    
  }



  
//  mostrarProductos(){
//   this.productService.getData().subscribe(
//     (response) => {
//       this.productos = response;
      
//       console.log(this.productos); // Puedes ver los datos en la consola
//     },
//     (error) => {
//       console.error('Error al obtener los datos:', error);
//     }
//   );
//  }

 agregarProducto(item: Product){
  this.cartService.addToCart(item, this.cantidad)
  this.cantidad = 1
  
  console.log(this.cartService.productsInCart)
 }
 agregarCantidad(){

    this.cantidad ++
   
 }
 disminuirCantidad(){
 if(this.cantidad > 1){
    this.cantidad --   
 }
  }
}
  
 

