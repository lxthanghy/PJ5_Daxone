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
export class ProductService {
  private API_URL = 'http://localhost:5000/api';
  constructor(private readonly http: HttpClient) {}

  GetAll() {
    const url = `${this.API_URL}/products`;
    return this.http.get(url);
  }
  GetById(id: string) {
    const url = `${this.API_URL}/products/${id}`;
    return this.http.get(url);
  }
}
