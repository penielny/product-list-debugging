import { Component } from '@angular/core';
import desseretData from '../../public/data.json';
import { AddToCartComponent } from "./components/add-to-cart/add-to-cart.component";
import { CommonModule } from '@angular/common';
import { Dessert } from './interfaces/dessert';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [AddToCartComponent,CommonModule]
})

export class AppComponent {
  title = 'Product list';
  desserts: Dessert[] | null = null;

  constructor() {
    this.desserts = desseretData;
  };
};
