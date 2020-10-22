import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { first } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return v.password === v.confirmPassword
    ? null
    : {
        passwordnotmatch: true,
      };
}
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
  providers: [MessageService],
})
export class LoginRegisterComponent implements OnInit {
  formRegister: FormGroup;
  formLogin: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      pw: this.fb.group(
        {
          password: this.fb.control('', [
            Validators.required,
            Validators.minLength(6),
          ]),
          confirmPassword: this.fb.control(''),
        },
        {
          validators: comparePassword,
        }
      ),
      address: this.fb.control(''),
      email: this.fb.control('', Validators.email),
      phone: this.fb.control(''),
    });
    this.formLogin = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  onLogin() {
    var userLogin = {
      username: this.formLogin.get('username').value,
      password: this.formLogin.get('password').value,
    };
    this.userService
      .login(userLogin)
      .pipe(first())
      .subscribe(
        (user) => {
          if (user == null) {
            this.messageService.add({
              severity: 'error',
              summary: 'Thông báo',
              detail: 'Tài khoản hoặc mật khẩu không tồn tại',
            });
            this.clearFormLogin();
          } else {
            this.messageService.add({
              severity: 'success',
              summary: 'Thông báo',
              detail: 'Đăng nhập thành công',
            });
            setTimeout(() => {
              this.router.navigateByUrl('/home');
            }, 1000);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  onRegister() {
    //console.log(this.formRegister.value);
    var user = {
      username: this.formRegister.get('username').value,
      password: this.formRegister.get('pw').get('password').value,
      address: this.formRegister.get('address').value,
      email: this.formRegister.get('email').value,
      phone: this.formRegister.get('phone').value,
    };
    this.userService
      .register(user)
      .pipe(first())
      .subscribe((res) => {
        if (res > 0) {
          this.messageService.add({
            severity: 'success',
            summary: 'Thông báo',
            detail: 'Đăng ký thành công',
          });
          this.clearFormRegister();
        }
      });
  }
  clearFormLogin() {
    this.formLogin.reset();
  }
  clearFormRegister() {
    this.formRegister.reset();
  }
}
