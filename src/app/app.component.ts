import { Component } from '@angular/core';
import { AddToCartComponent } from "./components/add-to-cart/add-to-cart.component";
import { CommonModule } from '@angular/common';
import { Dessert } from './interfaces/dessert';
import { DessertService } from './services/dessert';
import { CartComponent } from "./components/cart/cart.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [AddToCartComponent,CartComponent, CommonModule, CartComponent]
})

export class AppComponent {
  title = 'Product list';
  desserts: Dessert[] | null = null;

  constructor(private dessertService: DessertService) {
    this.desserts = this.dessertService.getDesserts();
  };

};
