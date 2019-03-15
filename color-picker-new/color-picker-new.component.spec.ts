import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerNewComponent } from './color-picker-new.component';

describe('ColorPickerNewComponent', () => {
  let component: ColorPickerNewComponent;
  let fixture: ComponentFixture<ColorPickerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
