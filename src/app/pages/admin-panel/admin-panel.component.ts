import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductServiceService } from '../../shared/services/product.service.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  formError = signal('');
  productService = inject(ProductServiceService);
  productName = signal('juanito');
  isEditable = signal(false);
  title = signal('Agregar Producto')

  addProductForm = signal<FormGroup>(
    new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    })
  );
  registerProduct(){
    if(!this.addProductForm().valid){
      this.formError.update(()=>'Favor completa todos los campos');
    }else{
      this.productService.registerProduct(this.addProductForm().value)
      .subscribe({
        next: (response: any) => {
          {
            const message = response;
            console.log(message.message)
            this.formError.update(()=>  'Producto registrado con éxito!');
          }
      },
      error: (error: any) => {
        this.formError.update(()=>`Favor inicia sesión: ${error.error.message}` );
      }
    })     
    }
  };
//falta traer servicio de editar e implementarlo
  edit(id: string){
    const product = this.productService.products();
    const productEdit = product.find((product) => product._id === id);
    if(productEdit){
      this.isEditable.update(()=>true)
      this.title.update(()=>"Editar Producto")
      this.addProductForm().patchValue({
        name: productEdit?.name,
        description: productEdit?.description,
        price: productEdit?.price,
        category: productEdit?.category,
        stock: productEdit?.stock,
        image: productEdit?.image
      })
    }else{
      this.formError.update(()=>'No se encontró el producto');
    }
    
  };
}
