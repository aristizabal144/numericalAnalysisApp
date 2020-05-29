import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuSimpleComponent } from './lu-simple.component';

describe('LuSimpleComponent', () => {
  let component: LuSimpleComponent;
  let fixture: ComponentFixture<LuSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
