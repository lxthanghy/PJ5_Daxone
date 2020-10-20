import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ConfirmationService],
})
export class CartComponent implements OnInit {
  products: any[];
  totalMoney: number;
  constructor(
    private readonly cartService: CartService,
    private confirmationService: ConfirmationService
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
  deleteProduct(id: number): void {
    this.cartService.deleteProduct(id);
  }
  updateProduct(id: number, quantity: number): void {
    this.cartService.updateProduct(id, quantity);
  }
  clearCart(): void {
    this.confirmationService.confirm({
      message: 'Bạn có chắc muốn xoá sạch giỏ hàng?',
      header: 'Xoá giỏ hàng',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cartService.clearCart();
      },
      reject: () => {},
    });
  }
}
