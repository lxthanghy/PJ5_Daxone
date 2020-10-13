/* Import Module */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
/*End Import Module */

/* Import Component */
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { MobileOffCanvasComponent } from './mobile-off-canvas/mobile-off-canvas.component';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { DiscountComponent } from './discount/discount.component';
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
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
