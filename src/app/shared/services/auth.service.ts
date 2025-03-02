import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

import { AuthRequest, AuthResponse } from '../../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient)
  private API_URL = environment.API_URL;
  constructor() { }

  login(credencials: AuthRequest) {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth/login`,credencials);
  }
}
