import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    {name: 'Bike', price: 100, color:'yellow'},
    {name: 'Funky Hat', price: 10, color:'blue'},
    {name: 'Toy', price: 25, color:'brown'},
    {name: 'Shoes', price: 100, color:'black'},
    {name: 'Shirt', price: 30, color:'white'}
  ]

  decreasePrice(index) {
    console.log("hit parent decreasePrice function index:", index);

    if(this.items[index].price > 0 ) {
      this.items[index].price -= 1;
    }
  }


}
