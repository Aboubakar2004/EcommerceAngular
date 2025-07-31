import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButton } from '../../../components/primary-button/primary-button';
import { CartService } from '../../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `
    <div
      class="bg-white shadow-md border border-gray-300 rounded-xl p-6 flex flex-col gap-6 relative"
    >
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">{{ product().title }}</span>
          <span class="text-sm">{{ product().price + '€' }}</span>
          <app-primary-button
            label="Ajouter au panier"
            class="mt-3"
            (btnClicked)="cart.addToCart(product())"
          />
        </div>

        <span
          class="absolute top-2 right-3 text-sm font-bold"
          [class]="product().stock ? 'text-green-500' : 'text-red-500'"
        >
          @if (product().stock) {
          {{ product().stock }} restant }@else { Article non disponible }
        </span>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  cart = inject(CartService);
  product = input.required<Product>();
}
