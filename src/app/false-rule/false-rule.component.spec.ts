import { async, ComponentFixture, TestBed } from '@angular/core/testing';

declare const showFunction:any;

import { FalseRuleComponent } from './false-rule.component';

describe('FalseRuleComponent', () => {
  let component: FalseRuleComponent;
  let fixture: ComponentFixture<FalseRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalseRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalseRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
