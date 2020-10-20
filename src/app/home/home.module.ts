/* Import Module */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
/*End Import Module */

/* Import Component */
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { MobileOffCanvasComponent } from './mobile-off-canvas/mobile-off-canvas.component';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { DiscountComponent } from './discount/discount.component';
import { CartWrapComponent } from './cart-wrap/cart-wrap.component';
/* End Import Component */

/* Other */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    MobileOffCanvasComponent,
    SliderComponent,
    BannerComponent,
    ProductComponent,
    DiscountComponent,
    CartWrapComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
