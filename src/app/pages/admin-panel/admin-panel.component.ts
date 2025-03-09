import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductServiceService } from '../../shared/services/product.service.service';

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
      .subscribe(
        (response) => {
          const message = response;
          console.log(message)
          this.formError.update(()=>  'Producto registrado con éxito!');
        });   
      
      console.log(this.addProductForm().value);
    }
  }
}
