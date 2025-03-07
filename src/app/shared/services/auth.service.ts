import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

import { AuthRequest, AuthResponse, newUser, emailResponse } from '../../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  message = signal('');
  userResponse = signal('');
  passwordResponse = signal('');
  getUser(){
    return localStorage.getItem('user')||'user'
  };
  getToken(){
    return localStorage.getItem('token')||'token'
  };
  getRole(){
    if(this.getUser()==="admin"){
      return true
    }else{
      return false
    }
  }

  private API_URL = environment.API_URL;
  constructor() { }
  //Login de usuario
  login(credencials: AuthRequest) {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth/login`,credencials)
    .subscribe({
      next: (response: AuthResponse ) => {
        if(response.token){
          //Guardar token y user
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", response.role || 'user');
          
          this.message.update(()=> `Bienvenido, ${response.name}` || "user");
          setTimeout(()=>this.router.navigate(['/admin']),1000)
          //console.log(response)
        }else{
          const { error: message } = response;
          this.message.update(()=>message || "Error")
        }
      },
      error:(error)=>{
        //const {error: message} = error
        this.message.update(()=> error.error.message  )
        console.log(error.error.message)
        }
    });
  }
//registro de usuario
register(data: newUser) {
 return this.http.post<AuthResponse>(`${this.API_URL}/auth/registro`,data)
  .subscribe({
    next: (response: AuthResponse) => {
      const message = response.message;
      this.userResponse.update(()=>message || "Error")
      setTimeout(()=>this.router.navigate(['/login']),1000)
    },
    error: (error) => {
      this.userResponse.update(()=>error.error.message || "Error")
    }
  })
};
//solicitud cambio contraseña
recoverPassword(email: string){
 return this.http.post<emailResponse>(`${this.API_URL}/auth/forgot-password`,email)
  .subscribe({
    next: (response: emailResponse) => {
      const message = response.message;
      this.userResponse.update(()=>message || "Error")
    },error: (error) => {
      this.userResponse.update(()=>error.error.message || "Error")
    }
  })
};
//reset contraseña
resetPassword(token: String, password: string) {
  return this.http.patch<emailResponse>(`${this.API_URL}/auth/reset-password`,password,{
    headers: ({
      'Authorization': `Bearer ${token}`
    })
  }).subscribe({
    next: (response: emailResponse) => {
      const message = response.message;
      this.passwordResponse.update(()=>message || "Error")
      setTimeout(()=>this.router.navigate(['/login']),1000)
    },error: (error) => {
      this.passwordResponse.update(()=>error.error.message || "Error")
      setTimeout(()=>this.router.navigate(['/forgot-password']),1000)
    }
  })
}
}
