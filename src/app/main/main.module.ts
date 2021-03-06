/* Import Module */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/*End Import Module */
/* Import Component */
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { MobileOffCanvasComponent } from './mobile-off-canvas/mobile-off-canvas.component';
import { CartWrapComponent } from './cart-wrap/cart-wrap.component';
/*End Import Component */
import { AuthGuard } from '../guards/auth.guard';
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
        canActivate: [AuthGuard],
      },
      {
        path: 'my-account',
        loadChildren: () =>
          import('./my-account/my-account.module').then(
            (m) => m.MyAccountModule
          ),
        canActivate: [AuthGuard],
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
  declarations: [
    MainComponent,
    HeaderComponent,
    MobileOffCanvasComponent,
    CartWrapComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
})
export class MainModule {}
