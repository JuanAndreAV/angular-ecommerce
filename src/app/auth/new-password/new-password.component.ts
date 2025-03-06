import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent implements OnInit {
  passwordError = signal('');
  changePasswordToken = signal('');

  route = inject(ActivatedRoute);
  authService = inject(AuthService);

//Formulario
  newPasswordForm = signal<FormGroup>(
    new FormGroup({
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', Validators.required),
    })
  );
  
  

  extractToken():void{
    this.route.queryParamMap.subscribe(
      params => {
       const extract = params.get('token');
       this.changePasswordToken.update(n=>n=extract || 'null')
      
      }
    )
  }
  ngOnInit(): void {
      this.extractToken();
  }
  //validacion y envio de datos
  newPassword(){
    console.log(this.changePasswordToken())
    if(!this.newPasswordForm().valid){
      this.passwordError.update(text=>text="Ingresa una contraseña de al menos 8 caracteres")
    }else{
      if(this.newPasswordForm().value.newPassword !== this.newPasswordForm().value.confirmPassword){
        this.passwordError.update(text=>text="Las contraseñas no coinciden") 
      }else{
        this.passwordError.update(text=>text="")
        //envio contraseña y token
        const pass = this.newPasswordForm().value;
        this.authService.resetPassword(this.changePasswordToken(),pass)
        console.log(this.newPasswordForm().value.newPassword)
       
      }
    }
  };
  

}
