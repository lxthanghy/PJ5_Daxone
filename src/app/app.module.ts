/* Import Module */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* End import Module */
/* Import Component */
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
/* End import Component */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'client',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
