import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { ProductService } from "../../services/product.service";
import { CartService } from '../../services/cart.service';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, AsyncPipe, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  cartItems$ = this.cartService.totalCartItems$;
  
  constructor(private productService: ProductService, public cartService: CartService) { }

  ngOnInit() {
    this.products$ = this.productService.getProductData();
  }
  
  clearCart() {
    this.cartService.clearCart();
  }
}