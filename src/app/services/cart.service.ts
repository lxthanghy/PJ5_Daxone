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
    let local_storage: any[] = [];
    if (localStorage.getItem('carts') == null) {
      local_storage.push(product);
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
  getProducts(): any[] {
    let local_storage = localStorage.getItem('carts');
    return local_storage == null ? [] : JSON.parse(local_storage);
  }
  deleteProduct(id: number) {
    let local_storage = this.getProducts().filter((p) => p.id != id);
    localStorage.setItem('carts', JSON.stringify(local_storage));
    this.productsCart.next(local_storage);
  }
  updateProduct(id: number, quantity: number) {
    let products = JSON.parse(localStorage.getItem('carts'));
    for (let p of products) {
      if (p.id == id) {
        p.quantity = quantity;
        break;
      }
    }
    localStorage.setItem('carts', JSON.stringify(products));
    this.productsCart.next(products);
  }
  clearCart() {
    localStorage.clear();
    this.productsCart.next(null);
  }
}
