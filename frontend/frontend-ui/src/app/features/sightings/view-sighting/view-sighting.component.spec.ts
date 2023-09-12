import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSightingComponent } from './view-sighting.component';

describe('ViewSightingComponent', () => {
  let component: ViewSightingComponent;
  let fixture: ComponentFixture<ViewSightingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSightingComponent]
    });
    fixture = TestBed.createComponent(ViewSightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
