import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplineLinComponent } from './spline-lin.component';

describe('SplineLinComponent', () => {
  let component: SplineLinComponent;
  let fixture: ComponentFixture<SplineLinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplineLinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplineLinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
