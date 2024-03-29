import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { CalculatorNewComponent } from './calculator-new/calculator-new.component';
import { ColorPickerNewComponent } from './color-picker-new/color-picker-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CalculatorComponent,
    ColorPickerComponent,
    FontSizeEditorComponent,
    PetComponent,
    CalculatorNewComponent,
    ColorPickerNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
