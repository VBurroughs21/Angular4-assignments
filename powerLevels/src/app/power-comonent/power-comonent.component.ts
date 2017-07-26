import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power-comonent',
  templateUrl: './power-comonent.component.html',
  styleUrls: ['./power-comonent.component.css']
})
export class PowerComonentComponent implements OnInit {
  @Input() info;
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

}
