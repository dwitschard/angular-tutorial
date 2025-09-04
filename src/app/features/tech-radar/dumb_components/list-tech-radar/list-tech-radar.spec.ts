import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListTechRadar} from './list-tech-radar';
import {inputBinding, signal, WritableSignal} from '@angular/core';
import {Technology} from '../../tech-radar.types';

describe('ListTechRadar', () => {
  let component: ListTechRadar;
  let fixture: ComponentFixture<ListTechRadar>;
  const technologyInput: WritableSignal<Technology[]> = signal([]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTechRadar]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListTechRadar, {
      bindings: [
        inputBinding('technologies', technologyInput)
      ]
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    technologyInput.set([]);

    expect(component).toBeTruthy();
  });

  it('should render title of component', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent.trim())
      .toEqual('List View')
  });

  it('should render default Technology (via DOM-Tree)', () => {
    technologyInput.set(angularTechnology);
    fixture.detectChanges(); // <- Trigger Update within Component

    // Selector is bound to the Structure of the component :-(
    const listItem = fixture.nativeElement.querySelectorAll('.technology-list > li');

    expect(listItem.length).toEqual(1);
    expect(listItem[0].textContent.trim()).toEqual('Angular - Adopt - Kategorie 1 - Beschreibung')
  });

  it('should render default Technology (via data-attribute)', () => {
    technologyInput.set(angularTechnology);
    fixture.detectChanges();

    // Selector is not bound to the Structure of the component
    const testId = `LIST_ITEM_${angularTechnology[0].name}`;
    const listItem = fixture.nativeElement.querySelectorAll(`[data-testid="${testId}"]`);

    expect(listItem.length).toEqual(1);
    expect(listItem[0].textContent.trim()).toEqual('Angular - Adopt - Kategorie 1 - Beschreibung')
  });
});

const angularTechnology = [{
  name: 'Angular',
  kategorie: 'Kategorie 1',
  ring: 'Adopt',
  description: 'Beschreibung',
}];
