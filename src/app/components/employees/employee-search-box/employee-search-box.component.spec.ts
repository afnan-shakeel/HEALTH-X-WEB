import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSearchBoxComponent } from './employee-search-box.component';

describe('EmployeeSearchBoxComponent', () => {
  let component: EmployeeSearchBoxComponent;
  let fixture: ComponentFixture<EmployeeSearchBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSearchBoxComponent]
    });
    fixture = TestBed.createComponent(EmployeeSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
