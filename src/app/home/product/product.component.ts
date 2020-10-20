import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService],
})
export class ProductComponent implements OnInit {
  constructor(
    private readonly productService: ProductService,
    private readonly cartService: CartService,
    private readonly messageService: MessageService
  ) {}
  products: any;
  ngOnInit(): void {
    this.productService
      .GetAll()
      .pipe(first())
      .subscribe((products) => {
        //console.log(products);
        this.products = products;
      });
  }
  addToCart(product: any): void {
    //console.log(product);
    this.cartService.addToCart(product);
    this.messageService.add({
      severity: 'success',
      summary: 'Thông báo',
      detail: 'Thêm thành công',
    });
  }
}
