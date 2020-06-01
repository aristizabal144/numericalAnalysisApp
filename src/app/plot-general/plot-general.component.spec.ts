import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotGeneralComponent } from './plot-general.component';

describe('PlotGeneralComponent', () => {
  let component: PlotGeneralComponent;
  let fixture: ComponentFixture<PlotGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
