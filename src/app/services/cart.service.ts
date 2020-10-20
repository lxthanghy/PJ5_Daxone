import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private productsCart = new BehaviorSubject<any[]>([]);
  products$ = this.productsCart.asObservable();
  constructor() {
    let local_storage = JSON.parse(localStorage.getItem('carts'));
    if (!local_storage) local_storage = [];
    this.productsCart.next(local_storage);
  }
  addToCart(product: any): void {
    product.quantity = 1;
    let local_storage: any;
    if (localStorage.getItem('carts') == null) {
      local_storage = [product];
    } else {
      local_storage = JSON.parse(localStorage.getItem('carts'));
      let checkProduct: boolean = true;
      for (let p of local_storage) {
        if (p.id == product.id) {
          checkProduct = false;
          p.quantity += 1;
          break;
        }
      }
      if (checkProduct) local_storage.push(product);
    }
    localStorage.setItem('carts', JSON.stringify(local_storage));
    this.productsCart.next(local_storage);
  }
  getProductsCart() {
    var local_storage = localStorage.getItem('carts');
    return local_storage == null ? [] : JSON.parse(local_storage);
  }
}
