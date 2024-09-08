import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  private productUrl = '/assets/data/data.json';

  getProductData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API request failed:', error.message);
    return throwError(() => new Error('Failed to fetch product data. Please try again later.'));
  }
}