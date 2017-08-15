import { Component } from '@angular/core';

import { PuppyService } from './puppy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageUrl = ""
  breed = ""

  constructor(private _puppyService: PuppyService) {}

  getDog() {

    // Make the call to the service to get image
    // Set my image to this.imageUrl to see in html
    this._puppyService.getPuppy()
      .then(data => this.imageUrl = data.message)
      .catch(err => console.log(err));
  }

  onSubmit() {
    console.log("hit on submit")
    // Grab breed from form (this.breed)
    // Make the call to the service to get image from API
    // Set my image to this.imageUrl to see in html
    this._puppyService.getBreedImg(this.breed)
      .then(data => this.imageUrl = data.message)
      .catch(err => console.log(err));
  }
}

