import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-mat-numberpicker',
  templateUrl: './number-picker.component.html',
})
export class NumberPickerComponent implements OnInit {

    private numberPickerValue: number;
    private decreaseButtonDisabled: boolean = false;
    private increaseButtonDisabled: boolean = false;

    @Input() disabled: boolean = false;
    @Input() min: number = 0;
    @Input() max: number = 50;
    @Input() default: number;

    @Output() onChange: EventEmitter<number> = new EventEmitter();

    constructor() {
        this.numberPickerValue = 0;
    }

    ngOnInit(): void {
        if (this.default === null || this.default === undefined) {
           this.numberPickerValue = 0;
        } else {
            this.numberPickerValue = this.default;
        }
        this.checkButtons();
    }

    increase(event: any): void {
        event.preventDefault();
        if (this.numberPickerValue < this.max) {
            this.numberPickerValue++;
            this.onChange.emit(this.numberPickerValue);
        }
        this.checkButtons();
    }

    decrease(event: any): void {
        event.preventDefault();
        if (this.numberPickerValue > this.min) {
            this.numberPickerValue--;
            this.onChange.emit(this.numberPickerValue);
        }
        this.checkButtons();
    }

    checkButtons(): void {
        this.increaseButtonDisabled = false;
        this.decreaseButtonDisabled = false;
        if (this.numberPickerValue <= this.min) {
            this.decreaseButtonDisabled = true;
        }
        if (this.numberPickerValue >= this.max) {
            this.increaseButtonDisabled = true;
        }
    }

}
