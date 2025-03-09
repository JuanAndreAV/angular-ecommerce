import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, Validator, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { AuthResponse, AuthRequest } from '../../../interfaces/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorName = signal('');
  errorMail = signal('');
  errorPassword = signal('');
  succes = signal('');

  public authService = inject(AuthService)


  registerForm =  signal<FormGroup>(
    new FormGroup({
      name: new FormControl('', Validators.required ),
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl ('', Validators.required) 
    })
  )
  validForm(){
    //validación y envio del formulario
    if(!this.registerForm().valid){
      if(!this.registerForm().get('name')?.valid){
        this.errorName.update(text=>text = "Debes ingresar un nombre")
      }else{
        this.errorName.update(text=>text = "")
      }
      if(!this.registerForm().get('email')?.valid){
        this.errorMail.update(text=>text = "Debes ingresar un correo")
      }else{
        this.errorMail.update(text=>text = "")
      }
      if(!this.registerForm().get('password')?.valid){
        this.errorPassword.update(text=>text = "Debes ingresar una contraseña de al menos 8")
      }else{
        this.errorPassword.update(text=>text = "")
        }
      return
    }if(this.registerForm().valid){
      if(this.registerForm().value.password === this.registerForm().value.confirmPassword){
        this.errorPassword.update(text=>text= "")

        //envio registro
        this.authService.register(this.registerForm().value)
        //console.log(this.registerForm().value)
        
      }else{
        this.errorPassword.update(text=>text = "Las contraseñas deben ser iguales")
        return
      }
    }
  };
  

}
