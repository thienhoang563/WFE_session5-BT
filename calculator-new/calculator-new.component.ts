import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-new',
  templateUrl: './calculator-new.component.html',
  styleUrls: ['./calculator-new.component.scss']
})
export class CalculatorNewComponent implements OnInit {
  output: number;
  first: number;
  second: number;
  operator = '+';
  onFirstchange(value) {
    this.first = Number(value);
  }
  onSecondchange(value) {
    this.second = Number(value);
  }
  onSelectchange(value) {
    this.operator = value;
  }
  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case 'x':
        this.output = this.first * this.second;
        break;
      case ':':
        this.output = this.first / this.second;
        break;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
