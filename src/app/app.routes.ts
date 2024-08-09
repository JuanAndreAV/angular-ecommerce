import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

export const routes: Routes = [
    {
        path: '',
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
    
];
