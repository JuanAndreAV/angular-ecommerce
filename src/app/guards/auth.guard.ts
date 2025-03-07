import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
console.log('verificando acceso')
  const authService = inject(AuthService);
  const router = inject(Router)
  if(authService.getRole()=== true){
    return true;
  }else{
    router.navigate(['/home'])
    return false;

  }
  
};
