/* Import Module */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/*End Import Module */
/* Import Component */
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { MobileOffCanvasComponent } from './mobile-off-canvas/mobile-off-canvas.component';
/*End Import Component */
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'product',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./about-us/about-us.module').then((m) => m.AboutUsModule),
      },
      {
        path: 'login-register',
        loadChildren: () =>
          import('./login-register/login-register.module').then(
            (m) => m.LoginRegisterModule
          ),
      },
      {
        path: 'cart-list',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'wishlist',
        loadChildren: () =>
          import('./wishlist/wishlist.module').then((m) => m.WishlistModule),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./checkout/checkout.module').then((m) => m.CheckoutModule),
      },
      {
        path: 'post',
        loadChildren: () =>
          import('./post/post.module').then((m) => m.PostModule),
      },
    ],
  },
];
@NgModule({
  declarations: [MainComponent, HeaderComponent, MobileOffCanvasComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainModule {}
