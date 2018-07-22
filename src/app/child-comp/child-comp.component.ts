import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

@Output() passNum : EventEmitter<number> = new EventEmitter<number>();


  onInput(num){
    this.passNum.emit(num);
  }


  constructor() { }

  ngOnInit() {
  }

}
