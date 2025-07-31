import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  imports: [],
  template: `
    <button
      (click)="btnClicked.emit()"
      class="bg-red-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class DeleteButton {
  label = input();

  btnClicked = output();
}
