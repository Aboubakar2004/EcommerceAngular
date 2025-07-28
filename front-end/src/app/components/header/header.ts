import { Component, signal } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `
    <h1
      class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <span class="text-2xl"> A-commerce </span>
      <app-primary-button
        [label]="Panier()"
        (btnClicked)="showButtonClicked()"
      />
    </h1>
  `,
  styles: `

  
  
  `,
})
export class Header {
  Panier = signal('Panier');

  showButtonClicked() {
    console.log('Cliqué');
  }
}
