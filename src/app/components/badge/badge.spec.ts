import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Badge } from './badge';
import {inputBinding, signal} from '@angular/core';

describe('Badge', () => {
  let component: Badge;
  let fixture: ComponentFixture<Badge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Badge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Badge, {
      bindings: [
        inputBinding('text', signal('Dummy Value')),
        inputBinding('color', signal('primary'))
      ]
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
