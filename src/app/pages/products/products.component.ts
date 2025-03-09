import { Component, computed, inject, OnInit, signal } from '@angular/core';
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
  products = computed(()=>this.productService.products());
  selectedCategory = signal<string | null>(null);

  isCategoryMenuOpen = false;

  toggleCategoryMenu() {
  this.isCategoryMenuOpen = !this.isCategoryMenuOpen;
}
 
  filteredProducts = computed(() =>
    this.selectedCategory()
      ? this.products().filter((p) => p.category === this.selectedCategory())
      : this.products()
  );
  
  filterProducts(category: any | null) {
    this.selectedCategory.set(category);
  }
  constructor( public cartService: CartService) {}
  
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
  this.cartService.addToCart(item)
  //console.log(this.cartService.productsInCart())
 }

}
  
 

