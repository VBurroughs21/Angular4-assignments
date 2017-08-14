import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item;
  @Input() index;
  @Output() priceDown = new EventEmitter()
  
  constructor() { }

  ngOnInit() {
  }

  minusOne(event) {
    console.log("button clicked on child", this.item.name);
    this.priceDown.emit(this.index)

  }
}
