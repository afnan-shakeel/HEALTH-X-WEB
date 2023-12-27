import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsSearchBoxComponent } from './patients-search-box.component';

describe('PatientsSearchBoxComponent', () => {
  let component: PatientsSearchBoxComponent;
  let fixture: ComponentFixture<PatientsSearchBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsSearchBoxComponent]
    });
    fixture = TestBed.createComponent(PatientsSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
