import { Component, inject, signal } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
import { CartService } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, RouterLink],
  template: `
    <h1
      class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <button class="text-2xl" routerLink="/">A-commerce</button>
      <app-primary-button
        [label]="'Panier(' + cart.cart().length + ')'"
        routerLink="/cart"
      />
    </h1>
  `,
  styles: `

  
  
  `,
})
export class Header {
  cart = inject(CartService);
}
