import { Component, inject, Input, OnInit } from '@angular/core';
import { Dessert } from '../../interfaces/dessert';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-dessert-card',
  imports: [AddToCartComponent, CommonModule],
  templateUrl: './dessert-card.component.html',
  styleUrl: './dessert-card.component.scss'
})
export class DessertCardComponent implements OnInit {

  @Input() dessert!: Dessert;
  isInCart: boolean = false;
  cartService = inject(CartService)

  ngOnInit(): void {
    this.cartService.cart$.subscribe({
      next: () => {
        const isFound = this.cartService.isInCart(this.dessert.name)
        if (isFound !== -1) {
          this.isInCart = true;
        }else{
          this.isInCart = false;
        }
      }
    })
  }



}
