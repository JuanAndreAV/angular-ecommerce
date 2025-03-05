import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { RegisterComponent } from './auth/register/register/register.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'productos',
        component: ProductsComponent
    },
    {
        path: 'nosotros',
        component: NosotrosComponent
    },
    {
        path: 'carrito',
        component: CarritoComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'admin',
        component: AdminPanelComponent
    }
    
];
