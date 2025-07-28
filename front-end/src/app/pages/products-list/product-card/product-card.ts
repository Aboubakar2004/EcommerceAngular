import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButton } from '../../../components/primary-button/primary-button';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `
    <div
      class="bg-white shadow-md  rounded-xl p-6 flex flex-col gap-6 relative"
    >
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">{{ product().title }}</span>
          <span class="text-sm">{{ product().price + '€' }}</span>
          <app-primary-button label="Ajouter au panier" class="mt-3" />
        </div>

        <span class="absolute top-2 right-3 text-sm font-bold"></span>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>();
}
