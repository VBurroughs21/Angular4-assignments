import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  power = 1;

  sections = [
    {'title': 'HumanComponent', 'power': 1},
    {'title': 'SaiyanComponent', 'power': 10},
    {'title': 'SuperSaiyanComponent', 'power': 90},
    {'title': 'SuperSaiyanTwoComponent', 'power': 150},
    {'title': 'SuperSaiyanThreeComponent', 'power': 250},
    {'title': 'SuperSaiyanFourComponent', 'power': 500}
  ]
}
