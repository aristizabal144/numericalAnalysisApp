import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplineCuadComponent } from './spline-cuad.component';

describe('SplineCuadComponent', () => {
  let component: SplineCuadComponent;
  let fixture: ComponentFixture<SplineCuadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplineCuadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplineCuadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
