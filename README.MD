# ngx-mat-numberpicker

Angular numberpicker component based on Angular Material.

![alt example image](https://raw.githubusercontent.com/retailify/ngx-mat-numberpicker/master/images/example.png)

## Installation

To install this library (component), run:

Using npm:
```bash
$ npm install @retailify/ngx-mat-numberpicker --save
```

Using yarn:
```bash
$ yarn add @retailify/ngx-mat-numberpicker
```

## Consuming this library (component)

You can import this library (component) in any Angular application by running:

Using npm:
```bash
$ npm install @retailify/ngx-mat-numberpicker
```

Using yarn:
```bash
$ yarn add @retailify/ngx-mat-numberpicker
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import this library
import { NumberPickerModule } from '@retailify/ngx-mat-numberpicker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    // Specify this library as an import
    NumberPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once this library is imported, you can use this component in your Angular application:

```html
<h1>
  {{title}}
</h1>
<ngx-mat-numberpicker [min]="1" [max]="6" [default]="1" 
                      [starttext]="'min: 1'" [endtext]="'max: 6'" 
                      [disabled]="true" (onChange)="onValueChanged($event)"></ngx-mat-numberpicker>
```

```typescript
class YourClass {
    currentValue: number = 1;
    
    onValueChanged(value: number): void {
        this.currentValue = value;
    }
}
```
### Component Inputs and Outputs ###
| Attribute        | Type           | Required  | Description |
| :------------- |:-------------| :-----:| :-----|
| min | [input] Number | No | limit the minimal number to the given value; 0 by default |
| max | [input] Number | No | limit the maximum number to the given value; 50 by default |
| default | [input] Number | No | default start value for the number picker; 0 by default |
| starttext | [input] String | No | value for the left hint of the inputfield; empty by default |
| endtext | [input] String | No | value for the right hint of the inputfield; empty by default |
| disabled | [input] Boolean | No | enable / disable the input field; false by default |
| onChange | (output) Number | No | emits the value of the number picker, every time the user clicks the - or + button |

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

To run demo:

```bash
$ npm run playground
```

## License

MIT © [Retailify GmbH](mailto:info@retailify.de)
