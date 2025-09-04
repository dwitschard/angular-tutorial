import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTechRadar } from './table-tech-radar';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter} from '@angular/router';

describe('TableTechRadar', () => {
  let component: TableTechRadar;
  let fixture: ComponentFixture<TableTechRadar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTechRadar],
      providers: [provideHttpClient(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTechRadar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
