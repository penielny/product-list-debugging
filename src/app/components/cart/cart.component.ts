import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart';
import { cartItem } from '../../interfaces/cart';
import { DessertService } from '../../services/dessert';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';


interface ViewCartItem {
  price: number,
  dessertName: string,
  quantity: number
}

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  @Output() showModalEvent = new EventEmitter()

  cart: ViewCartItem[] = [];
  constructor(private cartService: CartService, private dessertService: DessertService) { }

  removeItemFromCart(dessertName: string) {
    this.cartService.removeFromCart(dessertName)
  }

  ngOnInit(): void {
    this.cartService.cart$
      .pipe(
        map((cartItems: cartItem[] = []) =>
          cartItems.map((cartItem): ViewCartItem => {
            const price_ = this.dessertService.getDessert(cartItem.dessertName)?.price;
            return {
              ...cartItem,
              price: price_ || 0
            };
          })
        )
      )
      .subscribe({
        next: (value) => {
          this.cart = value;
          console.log(value)
        }
      });
  }

  getTotal(): number {
    return this.cartService.getTotal()
  }

  onConfirm() {
    this.showModalEvent.emit()
  }

}
