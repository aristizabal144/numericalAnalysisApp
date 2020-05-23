import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleRootsComponent } from './multiple-roots.component';

describe('MultipleRootsComponent', () => {
  let component: MultipleRootsComponent;
  let fixture: ComponentFixture<MultipleRootsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleRootsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleRootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
