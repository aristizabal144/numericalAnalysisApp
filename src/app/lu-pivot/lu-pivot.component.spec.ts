import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuPivotComponent } from './lu-pivot.component';

describe('LuPivotComponent', () => {
  let component: LuPivotComponent;
  let fixture: ComponentFixture<LuPivotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuPivotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuPivotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
