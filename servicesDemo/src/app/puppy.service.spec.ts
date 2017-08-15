import { TestBed, inject } from '@angular/core/testing';

import { PuppyService } from './puppy.service';

describe('PuppyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuppyService]
    });
  });

  it('should be created', inject([PuppyService], (service: PuppyService) => {
    expect(service).toBeTruthy();
  }));
});
