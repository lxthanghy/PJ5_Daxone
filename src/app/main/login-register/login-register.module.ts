import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginRegisterComponent } from './login-register.component';
import { ToastModule } from 'primeng/toast';
const routes: Routes = [
  {
    path: '',
    component: LoginRegisterComponent,
  },
];
@NgModule({
  declarations: [LoginRegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
  ],
})
export class LoginRegisterModule {}
