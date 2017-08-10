import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-controller',
  templateUrl: './quote-controller.component.html',
  styleUrls: ['./quote-controller.component.css']
})
export class QuoteControllerComponent implements OnInit {
  @Input() quote: string;
  @Input() author: string;
  @Input() rating: number;
  @Input() index: number;

  @Output() voteUp = new EventEmitter();
  @Output() voteDown = new EventEmitter();
  @Output() deleteQuote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  up(event, index) {
    this.voteUp.emit(index);
  }

  down(event, index) {
    this.voteDown.emit(index);
  }

  delete(event, index) {
    this.deleteQuote.emit(index);
  }
}
