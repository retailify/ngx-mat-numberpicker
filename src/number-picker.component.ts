import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-mat-numberpicker',
  templateUrl: './number-picker.component.html',
})
export class NumberPickerComponent implements OnInit {

    private numberPickerValue: number;
    private decreaseButtonDisabled: boolean = false;
    private increaseButtonDisabled: boolean = false;
    private hintStartText: string = '';
    private hintEndText: string = '';

    @Input() disabled: boolean = false;
    @Input() min: number = 0;
    @Input() max: number = 50;
    @Input() default: number;
    @Input() starttext: string;
    @Input() endtext: string;

    @Output() onChange: EventEmitter<number> = new EventEmitter();

    constructor() {
        this.numberPickerValue = 0;
    }

    ngOnInit(): void {
        this.setDefaultValue();
        this.setHintTexts();
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
        if (this.getValue() > this.min) {
            this.numberPickerValue--;
            this.onChange.emit(this.numberPickerValue);
        }
        this.checkButtons();
    }

    checkButtons(): void {
        this.increaseButtonDisabled = false;

        this.decreaseButtonDisabled = this.getValue() <= this.min;
        if (this.numberPickerValue >= this.max) {
            this.increaseButtonDisabled = true;
        }
    }

    setDefaultValue(): void {
        if (this.default === null || this.default === undefined) {
            this.setValue(0);
        } else {
            this.setValue(this.default);
        }
    }

    setHintTexts(): void {
        this.setHintStartText(this.starttext);
        this.setHintEndText(this.endtext);
    }

    getValue(): number {
        return this.numberPickerValue;
    }

    setValue(value: number): void {
        this.numberPickerValue = value;
    }

    setHintStartText(value: string): void {
        this.hintStartText = value;
    }

    setHintEndText(value: string): void {
        this.hintEndText = value;
    }

}
