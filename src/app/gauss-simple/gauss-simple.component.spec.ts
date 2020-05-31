import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaussSimpleComponent } from './gauss-simple.component';

describe('GaussSimpleComponent', () => {
  let component: GaussSimpleComponent;
  let fixture: ComponentFixture<GaussSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaussSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaussSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
