import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart';
import { map } from 'rxjs';
import { cartItem } from '../../interfaces/cart';
import { DessertService } from '../../services/dessert';


interface ViewCartItem {
  price: number,
  image: string | undefined,
  dessertName: string,
  quantity: number,
}

@Component({
  selector: 'app-order-modal',
  imports: [CommonModule],
  templateUrl: './order-modal.component.html',
  styleUrl: './order-modal.component.scss'
})
export class OrderModalComponent implements OnInit {
  @Output() startNewAction = new EventEmitter();
  cart: ViewCartItem[] = [];
  constructor(private cartService: CartService, private dessertService: DessertService) { }

  ngOnInit(): void {
    this.cartService.cart$
      .pipe(
        map((cartItems: cartItem[] = []) =>
          cartItems.map((cartItem): ViewCartItem => {
            const dessert_ = this.dessertService.getDessert(cartItem.dessertName);
            return {
              ...cartItem,
              image: dessert_?.image.thumbnail,
              price: dessert_?.price || 0
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

  onStartNew(){
    this.startNewAction.emit()
  }
}
