# ngx-mat-numberpicker

Angular numberpicker component based on Angular Material.

![alt example image](https://github.com/retailify/ngx-mat-numberpicker/blob/master/images/example.png)

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

Once this library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use this library component in app.component.html -->
<h1>
  {{title}}
</h1>
<ngx-mat-numberpicker [min]="1" [max]="6" [default]="1" [starttext]="'Hello World'" [endtext]="'Hello World'" [disabled]="true" (onChange)="onValueChanged($event)"></ngx-mat-numberpicker>
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
| min | [input] Number | No | The minimal number limit on the number picker. 0 by default |
| max | [input] Number | No | The maximum number limit on the number picker. 50 by default |
| default | [input] Number | No | The default value for the number picker. 0 by default |
| starttext | [input] String | No | The value for the hint starttext of the inputfield. Empty by default |
| endtext | [input] String | No | The value for the hint endtext of the inputfield. Empty by default |
| disabled | [input] Boolean | No | Defines if the input input field should be disabled / enabled by the user. false by default |
| onChange | (output) Number | No | The onChange event of the component. Emits the value of the number picker, every time the user has clicked the - or + button. |

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
