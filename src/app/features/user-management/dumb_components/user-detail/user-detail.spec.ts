import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDetail} from './user-detail';
import {inputBinding, signal} from '@angular/core';

describe('UserDetail', () => {
  let component: UserDetail;
  let fixture: ComponentFixture<UserDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetail]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserDetail, {
      bindings: [
        inputBinding('user', signal({
          username: 'User 1',
          email: 'mail@mail.ch',
          role: 'admin'
        }))
      ]
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
