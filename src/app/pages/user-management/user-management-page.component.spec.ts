import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementPage } from './user-management-page.component';

describe('UserManagement', () => {
  let component: UserManagementPage;
  let fixture: ComponentFixture<UserManagementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManagementPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
