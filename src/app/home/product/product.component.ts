import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { first } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private readonly productService: ProductService,
    private readonly cartService: CartService
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
    alert('Thêm thành công !');
  }
}
