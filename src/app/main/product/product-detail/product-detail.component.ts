import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';
import { ProductService } from '../../../services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit, AfterViewInit {
  product: any;
  imageUrl: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        first(),
        map((params) => params.get('id')),
        switchMap((id) => this.productService.GetById(id))
      )
      .subscribe((product) => {
        this.product = product;
        //console.log(this.product);
      });
  }
  ngAfterViewInit(): void {}
}
