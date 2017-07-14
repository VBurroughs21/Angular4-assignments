import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Timezone Display';

  time;

  selected = 'clear'

  getDate(zone){
    this.selected = zone

    switch(zone){
      case 'cst':
        this.time = Date.now()
        break;
      case 'pst':
        this.time = Date.now() - (3600000 * 2)
        break;
      case 'mst':
        this.time = Date.now() - 3600000
        break;
      case 'est':
        this.time = Date.now() + 3600000
        break;
      default:
        this.time = ''
    }
  }
}
