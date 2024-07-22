import { Routes } from '@angular/router';
import { ProductsComponent } from './product/products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductionOrdersComponent } from './production-order/production-orders/production-orders.component';
import { ProductionOrderDetailComponent } from './production-order/production-order-detail/production-order-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'production-orders', component: ProductionOrdersComponent },
    { path: 'production-orders/:productionOrderId', component: ProductionOrderDetailComponent }
];
