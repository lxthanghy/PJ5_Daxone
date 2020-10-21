import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private API_URL = 'http://localhost:5000/api';
  constructor(private readonly http: HttpClient) {}
  checkout(order: any): Observable<number> {
    const url = `${this.API_URL}/orders`;
    var orderString = JSON.stringify(order);
    return this.http.post<any>(url, orderString, httpOptions);
  }
}
