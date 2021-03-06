import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberPickerComponent } from './number-picker.component';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';

export * from './number-picker.component';

@NgModule({
  imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
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
