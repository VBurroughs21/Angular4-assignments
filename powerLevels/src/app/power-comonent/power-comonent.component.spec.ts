import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerComonentComponent } from './power-comonent.component';

describe('PowerComonentComponent', () => {
  let component: PowerComonentComponent;
  let fixture: ComponentFixture<PowerComonentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerComonentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerComonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
