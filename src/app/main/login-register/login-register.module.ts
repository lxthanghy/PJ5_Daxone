import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginRegisterComponent } from './login-register.component';
const routes: Routes = [
  {
    path: '',
    component: LoginRegisterComponent,
  },
];
@NgModule({
  declarations: [LoginRegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LoginRegisterModule {}
