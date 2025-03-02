export interface AuthRequest {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    name?: string;
    role?: string;
    token?: string;
    message?: string,
    error?: string;
  }