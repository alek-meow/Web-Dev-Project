import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryProductsComponent} from "./category-products/category-products.component";
import {CategoryDetailComponent} from "./category-detail/category-detail.component";

const routes: Routes = [
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/:id', component: CategoryDetailComponent},
  {path: 'categories/:id/products', component: CategoryProductsComponent},
  {path: 'stores', component: StoreListComponent},
  {path: 'stores/:id', component: StoreProductsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetail},
  {path: 'cart', component: CartComponent},
  {path: 'orders', component: OrdersComponent},
  {path: '', redirectTo: 'categories', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
