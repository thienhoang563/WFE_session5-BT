import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker-new',
  templateUrl: './color-picker-new.component.html',
  styleUrls: ['./color-picker-new.component.scss']
})
export class ColorPickerNewComponent implements OnInit {
  background = '#fff';
  constructor() { }

  ngOnInit() {
  }
  onCHANGE(value) {
    this.background = value;
  }
}
