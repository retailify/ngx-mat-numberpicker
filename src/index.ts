import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberPickerComponent } from './number-picker.component';

export * from './number-picker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      NumberPickerComponent,
  ],
  exports: [
      NumberPickerComponent,
  ]
})
export class NumberPickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NumberPickerModule,
      providers: []
    };
  }
}
