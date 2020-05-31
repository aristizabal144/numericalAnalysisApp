import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaussPartialComponent } from './gauss-partial.component';

describe('GaussPartialComponent', () => {
  let component: GaussPartialComponent;
  let fixture: ComponentFixture<GaussPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaussPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaussPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
