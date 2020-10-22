import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [MessageService],
})
export class CheckoutComponent implements OnInit {
  products: any[] = [];
  totalMoney: number;
  firstName: string = '';
  lastName: string = '';
  orderAddress: string = '';
  orderPhone: string = '';
  orderEmail: string = '';
  orderNote: string = '';
  constructor(
    private readonly cartService: CartService,
    private readonly checkoutService: CheckoutService,
    private messageService: MessageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.cartService.products$.subscribe((res) => {
      this.products = res;
      this.totalMoney = 0;
      for (let p of this.products) {
        this.totalMoney += p.quantity * p.price;
      }
    });
  }
  checkout(): void {
    var order = {
      orderName: this.firstName + ' ' + this.lastName,
      orderAddress: this.orderAddress,
      orderEmail: this.orderEmail,
      orderPhone: this.orderPhone,
      orderNote: this.orderNote,
      totalMoney: this.totalMoney,
      orderDetails: JSON.stringify(this.products),
    };
    this.checkoutService
      .checkout(order)
      .pipe(first())
      .subscribe((res) => {
        //console.log(res);
        if (res > 0) {
          this.cartService.clearCart();
          this.messageService.add({
            severity: 'success',
            summary: 'Thông báo',
            detail: 'Đặt hàng thành công',
          });
          setTimeout(() => {
            this.router.navigateByUrl('/home');
          }, 1000);
        }
      });
  }
}
