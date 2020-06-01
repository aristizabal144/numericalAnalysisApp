import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplineCubicComponent } from './spline-cubic.component';

describe('SplineCubicComponent', () => {
  let component: SplineCubicComponent;
  let fixture: ComponentFixture<SplineCubicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplineCubicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplineCubicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
