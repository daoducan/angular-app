import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyFirstCompComponent} from "./my-first-comp/my-first-comp.component";
import {MySecondCompComponent} from "./my-second-comp/my-second-comp.component";
import {MessageDetailsComponent} from "./message-details/message-details.component";
import {AboutComponent} from "./about/about.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductComponent} from "./new-product/new-product.component";

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:username',
    component: AboutComponent
  },
  {
    path: 'home',
    component: MyFirstCompComponent
  },
  {
    path: 'second',
    component: MySecondCompComponent
  },
  {
    path: 'details',
    component: MessageDetailsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'new-product',
    component: NewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
