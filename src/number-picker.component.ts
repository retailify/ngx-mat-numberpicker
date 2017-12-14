import { Component } from '@angular/core';

@Component({
  selector: 'ngx-mat-numberpicker',
  templateUrl: './number-picker.component.html'
})
export class NumberPickerComponent {

    numberPickerValue: number;

    constructor() {
        this.numberPickerValue = 0;
    }

    increase(): void {
        this.numberPickerValue++;
    }

    decrease(): void {
        this.numberPickerValue--;
    }

}
