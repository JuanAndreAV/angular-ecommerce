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
  formMessage = signal('');
  productService = inject(ProductServiceService);
  productName = signal('juanito');
  isEditable = signal(false);
  title = signal('Agregar Producto');
  productId = signal('');
  showPopup = signal(false);

  popup(id?:string){
    this.productId.update(()=>id || '')
    console.log(this.productId())
    this.showPopup.update(state=> !state);
  };

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
      this.formMessage.update(()=>'Favor completa todos los campos');
    }else{
      this.productService.registerProduct(this.addProductForm().value)
      .subscribe({
        next: (response: any) => {
          {
            const message = response;
            console.log(message.message)
            this.formMessage.update(()=>  'Producto registrado con éxito!');
          }
      },
      error: (error: any) => {
        this.formMessage.update(()=>`Favor inicia sesión: ${error.error.message}` );
      }
    })     
    }
  };
//falta traer servicio de editar e implementarlo
  edit(id: string){
    const product = this.productService.products();
    this.productId.update(()=>id)
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
      this.formMessage.update(()=>'No se encontró el producto');
    }   
  };

  editProduct(){
    this.isEditable.update(()=>false)
    this.productService.editProduct(this.productId(), this.addProductForm().value)
    .subscribe({
      next: (response: Product ) => {
        this.formMessage.update(()=>  `Producto: editado con éxito!`);
        this.addProductForm().patchValue({
          name: '',
          description: '',
          price: '',
          category: '',
          stock: '',
          image: ''
        })
        
      },error: (error: any) => {
        this.formMessage.update(()=>`Favor inicia sesión: ${error.error.message}` );
      }
    })
  };
  deleteProduct(){
    this.productService.deleteProduct(this.productId())
    .subscribe({
      next: (response: any ) => {
        this.formMessage.update(()=> `Producto ${response.message.name} eliminado con éxito!`);
      },error: (error: any) => {
        this.formMessage.update(()=>`error: ${error.error.message}` );
      }
    })
    setTimeout(() =>this.showPopup.update(state=> !state),2000);
  }
  
  
}
