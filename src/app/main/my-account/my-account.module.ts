import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';

import { RouterModule, Routes } from '@angular/router';
import { ToastModule } from 'primeng/toast';

const routes: Routes = [
  {
    path: '',
    component: MyAccountComponent,
  },
];
@NgModule({
  declarations: [MyAccountComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ToastModule],
})
export class MyAccountModule {}
