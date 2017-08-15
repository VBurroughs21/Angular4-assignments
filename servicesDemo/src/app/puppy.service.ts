import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PuppyService {

  constructor(private _http: Http) {}
  
  // Promise to API for random dog pic
  getPuppy() {
    return this._http.get("https://dog.ceo/api/breeds/image/random")
      .map(data => data.json())
      .toPromise();
  }

  // Promise to API for random breed dog pic
  getBreedImg(breed) {
    console.log("called", breed)
    return this._http.get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .map(data => data.json())
      .toPromise();
  }

}
