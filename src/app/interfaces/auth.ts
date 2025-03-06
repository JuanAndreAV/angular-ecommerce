export interface AuthRequest {
    email: string;
    password: string;
  };
  
  export interface AuthResponse {
    name?: string;
    role?: string;
    token?: string;
    message?: string,
    error?: string;
  };

  export interface newUser {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    role?: string;
  };

  export interface emailResponse{
    message: string;
  }; 