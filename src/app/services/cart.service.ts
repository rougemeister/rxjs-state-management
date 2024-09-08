import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product.interface';  


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemSubject = new BehaviorSubject<Product[]>([]);
  private totalCartItemsSubject = new BehaviorSubject<number>(0);
  totalCartItems$ = this.totalCartItemsSubject.asObservable();

  addToCart(product: Product) {
    const currentCart = this.cartItemSubject.value;
    const updatedCart = [...currentCart, product];
    this.cartItemSubject.next(updatedCart);
    this.updateTotalItems(updatedCart);
  }

  isIncart(product: Product) {
    const inCartVar = this.cartItemSubject.getValue().some(item => item.name === product.name);
    console.log(inCartVar);
    return inCartVar;
  }


  removeFromCart(product: Product) {
    const currentCart = this.cartItemSubject.value;
    const updatedCart = currentCart.filter(item => item.name !== product.name);
    this.cartItemSubject.next(updatedCart);
    this.updateTotalItems(updatedCart);
  }

  clearCart() {
    this.cartItemSubject.next([]);
    this.updateTotalItems([]);
  }

  updateTotalItems(cartItems: Product[]) {
    const totalItems = cartItems.length;
    this.totalCartItemsSubject.next(totalItems);
  }

  constructor() { }
}
