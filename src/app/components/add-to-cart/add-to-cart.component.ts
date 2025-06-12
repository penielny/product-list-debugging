import { Component, Input } from '@angular/core';
import { Dessert } from '../../interfaces/dessert';

@Component({
  standalone: true,
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})

export class AddToCartComponent {
  isAddedToCart = false;
  quantity = 1;

  @Input() dessert!:Dessert;

  addToCart() {
    this.isAddedToCart = true;
  }

  decreaseProductItem() {
    if (this.quantity < 1) {
      this.isAddedToCart = false;
      return
    }
    this.quantity--;
  }

  increaseProductItem() {
    ++this.quantity;
  }

};
