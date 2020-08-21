import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceAmbulanceComponent } from './trace-ambulance.component';

describe('TraceAmbulanceComponent', () => {
  let component: TraceAmbulanceComponent;
  let fixture: ComponentFixture<TraceAmbulanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceAmbulanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
