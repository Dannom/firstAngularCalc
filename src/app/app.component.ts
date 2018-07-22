import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  num1: number;
  num2: number;
  operator: string
  result:number;

  showPassedNum1(data) {

    this.num1 = data;

  }
  showPassedNum2(data) {
    this.num2 = data;
  }
  showPassedOperator(data) {

    this.operator = data;

  }

  calc() {
    if (this.operator != null) {
      switch (this.operator) {
        case "+":
          this.result= this.num1 + this.num2;
          break;
        case "-":
        this.result= this.num1 - this.num2;
          break;
        case "/":
        this.result= this.num1 / this.num2;
          break;
        case "+":
        this.result= this.num1 * this.num2;
          break;

      }

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
