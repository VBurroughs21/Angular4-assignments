import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SwitchBoard';
  buttons = ['off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off']

  switchButton(index) {
    this.buttons[index] === 'off' ? this.buttons[index] = 'on' : this.buttons[index] = 'off' 
  }
}
