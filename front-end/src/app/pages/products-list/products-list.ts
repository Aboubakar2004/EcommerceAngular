import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsList {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'T-shirt Noir Basique',
      price: 19.99,
      image:
        'https://media.gettyimages.com/id/483960103/fr/photo/t-shirt-noir-sur-blanc-avec-un-trac%C3%A9-de-d%C3%A9tourage.jpg?s=612x612&w=gi&k=20&c=ooPiRuvubIsLpwHiJeyrqCJJbAmrhbtZo_DQk1uD4zc=',
      stock: 15,
    },
    {
      id: 2,
      title: 'T-shirt Blanc Oversize',
      price: 24.5,
      image:
        'https://media.istockphoto.com/id/482949611/photo/blank-white-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=NgWd6xDb3GuNoooQDCMGO9yrIiFv-w5fVkd2_IwUMsA=',
      stock: 0,
    },
    {
      id: 3,
      title: 'T-shirt Graphique Vintage',
      price: 29.99,
      image:
        'https://static.grafitee.fr/59973-product_small/t-shirt-playboy-aout-1982.jpg',
      stock: 5,
    },
    {
      id: 4,
      title: 'T-shirt Sport Dry-Fit',
      price: 34.95,
      image:
        'https://img01.ztat.net/article/spp-media-p1/2397d4de45854d949940cb24813a242b/65d3b32dde7a409b812813a7faa112ef.jpg?imwidth=1800&filter=packshot',
      stock: 12,
    },
    {
      id: 5,
      title: 'T-shirt Col V Bleu',
      price: 21.75,
      image:
        'https://cdn.store-factory.com/www.patoutatis.com/content/product_11564512b.jpg?v=1650897463',
      stock: 20,
    },
  ]);
}
