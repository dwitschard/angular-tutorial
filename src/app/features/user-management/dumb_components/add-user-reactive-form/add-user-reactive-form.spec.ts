import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserReactiveForm } from './add-user-reactive-form';

describe('AddUserReactiveForm', () => {
  let component: AddUserReactiveForm;
  let fixture: ComponentFixture<AddUserReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserReactiveForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserReactiveForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
