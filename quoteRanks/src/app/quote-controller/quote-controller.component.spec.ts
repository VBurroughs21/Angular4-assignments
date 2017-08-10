import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteControllerComponent } from './quote-controller.component';

describe('QuoteControllerComponent', () => {
  let component: QuoteControllerComponent;
  let fixture: ComponentFixture<QuoteControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
