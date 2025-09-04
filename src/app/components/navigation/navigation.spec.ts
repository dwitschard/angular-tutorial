import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Navigation} from './navigation';
import {RouterTestingHarness, RouterTestingModule} from '@angular/router/testing';
import {inputBinding, signal} from '@angular/core';
import {provideRouter} from '@angular/router';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navigation],
      providers: [provideRouter([])],
    })
      .compileComponents();

    fixture = TestBed.createComponent(Navigation, {
      bindings: [
        inputBinding('links', signal([]))
      ]
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
