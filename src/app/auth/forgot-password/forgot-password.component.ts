import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup,FormControl, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  mailError = signal('');
  authService = inject(AuthService);

emailForm = signal<FormGroup>(
  new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
)
checkEmail(){
if(this.emailForm().valid){
  this.mailError.update(text=>text="");
  //envio mail para validacion en DB
  this.authService.recoverPassword(this.emailForm().value)
}else{
  this.mailError.update(text=>text="Debes ingresar una dirección válida")
}
}

}
