import { Component, signal, inject, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { AuthResponse } from '../../interfaces/auth';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  
})
export class LoginComponent {
  public authService = inject(AuthService);
  
  errorMail = signal('');
  errorPassword = signal('');
  

  loginForm = signal<FormGroup>(
    new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  );
  sendData(){
      if(!this.loginForm().valid){
      if(!this.loginForm().get('email')?.valid){
      this.errorMail.update(text=>text = "Verifica tu correo")
      }else{
        this.errorMail.update(text=>text = "")
      }
      if(!this.loginForm().get('password')?.valid){
        this.errorPassword.update(text => text = "Verifica tu contraseña")
      }else{
        this.errorPassword.update(text => text = "")
      }
      return
    }
    this.authService.login(this.loginForm().value)
   
    //console.log(this.loginForm().value);
  }

}
