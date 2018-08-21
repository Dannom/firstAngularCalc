import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {



  operators=[
    "+","-","/","x"
  ]

  @Output() passOperator: EventEmitter<string> = new EventEmitter<string>();

  onOperatorClick(data){
    this.passOperator.emit(data)
  }
  constructor() { }

  ngOnInit() {
  }

}
