import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/cart';
import { DeleteButton } from '../../components/delete-button/delete-button';
import { OrderSummary } from './order-summary/order-summary';

@Component({
  selector: 'app-cart',
  imports: [DeleteButton, OrderSummary],
  template: `
    <div class="flex flex-col gap-5 mt-16 m-8">
      @for (items of cart.cart(); track items.id) {
      <div
        class="bg-white shadow-md  rounded-xl p-6 flex flex-col gap-6 border border-gray-300 "
      >
        <img [src]="items.image" class="w-[200px] h-[100px] object-contain " />
        <h1 class="font-bold ">
          {{ items.title }}
        </h1>
        <div class="flex justify-between items-center">
          <h2 class="text-sm">
            {{ items.price + '€' }}
          </h2>
          <app-delete-button
            label="Supprimer l'article"
            (btnClicked)="cart.DeleteToCart(items)"
          />
        </div>
      </div>
      }
      <app-order-summary />
    </div>
  `,
  styles: ``,
})
export class Cart {
  cart = inject(CartService);
}
