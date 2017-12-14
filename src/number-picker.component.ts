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

    increase(event: any): void {
        event.preventDefault();
        this.numberPickerValue++;
    }

    decrease(event: any): void {
        event.preventDefault();
        this.numberPickerValue--;
    }

}
