import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserTemplateForm } from './add-user-template-form';

describe('AddUserTemplateForm', () => {
  let component: AddUserTemplateForm;
  let fixture: ComponentFixture<AddUserTemplateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserTemplateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserTemplateForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
