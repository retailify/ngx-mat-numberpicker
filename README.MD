# ngx-mat-numberpicker

## Installation

To install this library, run:

```bash
$ npm install @retailify/ngx-mat-numberpicker --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install @retailify/ngx-mat-numberpicker
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NumberPickerModule } from '@retailify/ngx-mat-numberpicker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NumberPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<ngx-mat-numberpicker [min]="1" [max]="6" [default]="1" [disabled]="true" (onChange)="onValueChanged($event)"></ngx-mat-numberpicker>
```
### Component Inputs and Outputs ###
| Attribute        | Type           | Required  | Description |
| :------------- |:-------------| :-----:| :-----|
| min | [input] Number | No | The minimal number limit on the number picker. 0 by default |
| max | [input] Number | No | The maximum number limit on the number picker. 50 by default |
| default | [input] Number | No | The default value for the number picker. 0 by default |
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

## License

MIT © [Retailify GmbH](mailto:info@retailify.de)
