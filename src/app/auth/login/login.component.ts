import { Component, signal, inject, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { AuthResponse } from '../../interfaces/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService);
  errorMail = signal('');
  errorPassword = signal('');
  message = signal('')

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
    .subscribe({
      next: (response: AuthResponse ) => {
        if(response.token){
          const {token} = response;
          localStorage.setItem("token", token)
          this.message.update(()=> `Bienvenido, ${response.name}` || "user")
          console.log(response)
        }else{
          const { error: message } = response;
          this.message.update(()=>message || "Error")
        }
      },
      error:(error)=>{
        //const {error: message} = error
        this.message.update(()=> error.error.message  )
        //console.log(message)
        }
      
    })
    //console.log(this.loginForm().value);
  }

}
