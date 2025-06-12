import { Component, inject, Input, OnInit } from '@angular/core';
import { Dessert } from '../../interfaces/dessert';
import { CartService } from '../../services/cart';

@Component({
  standalone: true,
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})

export class AddToCartComponent implements OnInit {
  isAddedToCart = false;
  quantity = 1;

  @Input() dessert!: Dessert;
  cartService = inject(CartService)

  ngOnInit(): void {
    this.cartService.cart$.subscribe({
      next: (value) => {
        const desertFound = this.cartService.isInCart(this.dessert.name)
        if (desertFound !== -1) {
          this.quantity = value[desertFound].quantity
        }
        if (desertFound === -1) {
          this.quantity = 0;
          this.isAddedToCart = false;
        }
      },
    })

  }

  addToCart() {
    this.quantity = 1;
    this.cartService.addToCart(this.dessert.name)
    this.isAddedToCart = true;
  }

  decreaseProductItem() {
    this.quantity--;
    this.cartService.quantityAction(this.dessert.name, "DECREASE")
    if (this.quantity < 1) {
      this.isAddedToCart = false;
      this.quantity = 0;
      this.cartService.removeFromCart(this.dessert.name)
    }
  }

  increaseProductItem() {
    ++this.quantity;
    this.cartService.quantityAction(this.dessert.name, "INCREASE")
  }


};
