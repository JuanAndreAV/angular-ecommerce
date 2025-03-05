import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

import { AuthRequest, AuthResponse, newUser } from '../../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  message = signal('');
  userResponse = signal('');

  private API_URL = environment.API_URL;
  constructor() { }

  login(credencials: AuthRequest) {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth/login`,credencials)
    .subscribe({
      next: (response: AuthResponse ) => {
        if(response.token){
          const {token} = response;
          localStorage.setItem("token", token);
          this.message.update(()=> `Bienvenido, ${response.name}` || "user");
          setTimeout(()=>this.router.navigate(['/home']),1000)
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

register(data: newUser) {
  this.http.post<AuthResponse>(`${this.API_URL}/auth/registro`,data)
  .subscribe({
    next: (response: AuthResponse) => {
      const message = response.message;
      this.userResponse.update(()=>message || "Error")
    },
    error: (error) => {
      
      this.userResponse.update(()=>error.error.message || "Error")
    }
  }
    
    
  )
};
}
