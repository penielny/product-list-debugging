import { Component, Input } from '@angular/core';
import { AddToCartComponent } from "./components/add-to-cart/add-to-cart.component";
import { CommonModule, NgIf } from '@angular/common';
import { Dessert } from './interfaces/dessert';
import { DessertService } from './services/dessert';
import { CartComponent } from "./components/cart/cart.component";
import { OrderModalComponent } from './components/order-modal/order-modal.component';
import { DessertCardComponent } from './components/dessert-card/dessert-card.component';
import { CartService } from './services/cart';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [DessertCardComponent, OrderModalComponent, CartComponent, CommonModule, CartComponent]
})

export class AppComponent {
  title = 'Product list';
  desserts: Dessert[] | null = null;
  showConfirmModal: boolean = false;

  constructor(private dessertService: DessertService, private cartService: CartService) {
    this.desserts = this.dessertService.getDesserts();
  };

  toggleModal() {
    this.showConfirmModal = true;
    // console.log(true)
  }

  closeModal() {
    this.cartService.clearCart()
    this.showConfirmModal = false;
  }

};
