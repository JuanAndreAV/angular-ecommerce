import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { RegisterComponent } from './auth/register/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './auth/new-password/new-password.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
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
        path: "forgot-password",
        component: ForgotPasswordComponent
    },
    {
        path: 'admin',
        component: AdminPanelComponent
    },
    {
        path: 'new-password',
        component: NewPasswordComponent
    }
    
];
