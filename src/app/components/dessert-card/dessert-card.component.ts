import { Component, Input } from '@angular/core';
import { Dessert } from '../../interfaces/dessert';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dessert-card',
  imports: [AddToCartComponent,CommonModule],
  templateUrl: './dessert-card.component.html',
  styleUrl: './dessert-card.component.scss'
})
export class DessertCardComponent {
  @Input() dessert!:Dessert;

}
