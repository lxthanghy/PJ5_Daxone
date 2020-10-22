import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userId: number = 0;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (this.userService.userValue.id != null)
      this.userId = parseInt(this.userService.userValue.id);
  }
}
