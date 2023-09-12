import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightingListComponent } from './sighting-list.component';

describe('SightingListComponent', () => {
  let component: SightingListComponent;
  let fixture: ComponentFixture<SightingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SightingListComponent]
    });
    fixture = TestBed.createComponent(SightingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
