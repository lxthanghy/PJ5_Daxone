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
    ],
  },
];
@NgModule({
  declarations: [MainComponent, HeaderComponent, MobileOffCanvasComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainModule {}
