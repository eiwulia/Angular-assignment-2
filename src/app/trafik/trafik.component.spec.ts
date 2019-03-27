import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafikComponent } from './trafik.component';

describe('TrafikComponent', () => {
  let component: TrafikComponent;
  let fixture: ComponentFixture<TrafikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
