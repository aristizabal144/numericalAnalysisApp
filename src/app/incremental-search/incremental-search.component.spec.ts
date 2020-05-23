import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalSearchComponent } from './incremental-search.component';

describe('IncrementalSearchComponent', () => {
  let component: IncrementalSearchComponent;
  let fixture: ComponentFixture<IncrementalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
