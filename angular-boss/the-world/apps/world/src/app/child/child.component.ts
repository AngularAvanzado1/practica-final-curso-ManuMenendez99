import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ab-world-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {
 @Input() childExample: string;
 @Output() exampleOutput = new EventEmitter<string>();

 exampleChild: string
  exampleMethodChild() {
    this.exampleOutput.emit(this.exampleChild)
  }
  constructor() { }

  ngOnInit() {
    this.exampleChild ='Hello Angular 8'
  }

}
