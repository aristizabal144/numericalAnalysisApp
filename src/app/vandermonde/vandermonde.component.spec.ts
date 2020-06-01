import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VandermondeComponent } from './vandermonde.component';

describe('VandermondeComponent', () => {
  let component: VandermondeComponent;
  let fixture: ComponentFixture<VandermondeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VandermondeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VandermondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
