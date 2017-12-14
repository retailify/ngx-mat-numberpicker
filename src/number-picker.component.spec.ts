import {} from 'jasmine';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { NumberPickerComponent } from './number-picker.component';

describe('NumberPickerComponent', () => {

  let comp:    NumberPickerComponent;
  let fixture: ComponentFixture<NumberPickerComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  /*beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberPickerComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(NumberPickerComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('Should be false', () => {
    expect(false).toBe(true);
  });*/
});
