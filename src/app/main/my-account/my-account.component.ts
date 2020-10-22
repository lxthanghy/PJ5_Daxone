import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
  providers: [MessageService],
})
export class MyAccountComponent implements OnInit {
  user: any = {};
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.userService.userValue;
  }
  logout() {
    this.userService.logout();
    this.messageService.add({
      severity: 'success',
      summary: 'Thông báo',
      detail: 'Đăng xuất thành công',
    });
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 1000);
  }
}
