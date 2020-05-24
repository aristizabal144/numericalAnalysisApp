import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedPointComponent } from './fixed-point.component';

describe('FixedPointComponent', () => {
  let component: FixedPointComponent;
  let fixture: ComponentFixture<FixedPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
