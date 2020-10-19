import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) {}
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
}
