import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart-wrap',
  templateUrl: './cart-wrap.component.html',
  styleUrls: ['./cart-wrap.component.css'],
})
export class CartWrapComponent implements OnInit {
  products: any[];
  total: number;
  totalMoney: number;
  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.products$.subscribe((res) => {
      this.total = res ? res.length : 0;
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
}
