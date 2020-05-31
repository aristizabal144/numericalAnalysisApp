import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaussTotalComponent } from './gauss-total.component';

describe('GaussTotalComponent', () => {
  let component: GaussTotalComponent;
  let fixture: ComponentFixture<GaussTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaussTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaussTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
