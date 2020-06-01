import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifNewtonComponent } from './dif-newton.component';

describe('DifNewtonComponent', () => {
  let component: DifNewtonComponent;
  let fixture: ComponentFixture<DifNewtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifNewtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifNewtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
