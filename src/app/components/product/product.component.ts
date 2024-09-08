import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private cartService: CartService) { }
  @Input() 
  product!: Product;
  isDisable = this.cartService.isDisable

    
  addtoCart(product: Product) {
    this.cartService.addToCart(product);
    this.isDisable = true;
 
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    console.log(this.isDisable)
    this.isDisable = false;

  }


}
