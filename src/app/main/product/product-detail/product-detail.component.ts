import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [MessageService],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  imageUrl: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private readonly cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => this.productService.GetById(id).pipe(first()))
      )
      .subscribe((product) => (this.product = product));
  }
  addToCart(product: any, quantity: any) {
    var pro = {
      id: product.id,
      imageUrl: product.imageUrl,
      name: product.name,
      price: product.price,
      promotionPrice: product.promotionPrice,
    };
    this.cartService.addToCart(pro, parseInt(quantity));
    this.messageService.add({
      severity: 'success',
      summary: 'Thông báo',
      detail: 'Thêm thành công',
    });
  }
}
