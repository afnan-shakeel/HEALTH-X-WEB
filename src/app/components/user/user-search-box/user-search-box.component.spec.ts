import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchBoxComponent } from './user-search-box.component';

describe('UserSearchBoxComponent', () => {
  let component: UserSearchBoxComponent;
  let fixture: ComponentFixture<UserSearchBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSearchBoxComponent]
    });
    fixture = TestBed.createComponent(UserSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
