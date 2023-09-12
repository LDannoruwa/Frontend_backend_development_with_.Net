import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSightingComponent } from './add-sighting.component';

describe('AddSightingComponent', () => {
  let component: AddSightingComponent;
  let fixture: ComponentFixture<AddSightingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSightingComponent]
    });
    fixture = TestBed.createComponent(AddSightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
