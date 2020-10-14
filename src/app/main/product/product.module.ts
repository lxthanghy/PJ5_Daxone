import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];
@NgModule({
  declarations: [ShopComponent, ProductDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductModule {}
