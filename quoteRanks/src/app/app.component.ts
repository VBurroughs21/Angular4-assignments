import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quotes = [
    {'quote': 'First Quote', 'author': 'VB', 'rating': 2},
    {'quote': 'Second Quote', 'author': 'Joe', 'rating': 3},
    {'quote': 'Third Quote', 'author': 'Jack', 'rating': 0}
  ]

  quote = {
    'quote': '',
    'author': '',
    'rating': 0
  }

  increaseRating(index) {
    this.quotes[index].rating ++
  }

  decreaseRating(index) {
    this.quotes[index].rating --
  }

  delete(index) {
    this.quotes.splice(index, 1)
  }

  formSubmit() {
    this.quotes.push(this.quote);
    this.quote = {
      'quote': '',
      'author': '',
      'rating': 0
    }
  }
  
}
