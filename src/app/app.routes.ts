import { Routes } from '@angular/router';
import { ProductsComponent } from './product/products/products.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent}
];
