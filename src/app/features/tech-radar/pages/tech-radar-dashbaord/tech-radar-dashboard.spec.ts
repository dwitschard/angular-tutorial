import {TestBed} from '@angular/core/testing';

import {TechRadarDashboard} from './tech-radar-dashboard';
import {TechRadarApi} from '../../services/api/tech-radar.api';
import {provideHttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Technology} from '../../tech-radar.types';

describe('TechRadarDashboard', () => {

  it('should create', async () => {
    const {component, getTechnologiesSpy} = await setup();

    expect(getTechnologiesSpy).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should render title of Component', async () => {
    const {fixture} = await setup();

    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Tech Radar');
  });

  it('should render list tech-radar component', async () => {
    const {fixture} = await setup();

    expect(fixture.nativeElement.querySelector('app-list-tech-radar')).toBeTruthy();
  })

  it('should display technology in app-list-tech-radar', async () => {
    const {fixture} = await setup({
      technologies: of(angularTechnology)
    });

    expect(fixture.nativeElement.querySelectorAll('app-list-tech-radar li')[0].textContent.trim())
      .toEqual('Angular - Adopt - Kategorie 1 - Beschreibung')
  });

  it('should render table tech-radar component', async () => {
    const {fixture} = await setup();

    expect(fixture.nativeElement.querySelector('app-table-tech-radar')).toBeTruthy();
  });

  it('should display technology in app-table-tech-radar', async () => {
    const {fixture} = await setup({
      technologies: of(angularTechnology)
    });

    expect(fixture.nativeElement.querySelectorAll('app-table-tech-radar div.tech_name')[0].textContent.trim())
      .toEqual('Angular')
  });
});

const defaultProps: Props = {
  technologies: of([])
}

async function setup(props = defaultProps) {
  const mergedProps = {...defaultProps, ...props}
  const getTechnologiesSpy = jasmine.createSpy('getTechnologies');

  await TestBed.configureTestingModule({
    imports: [TechRadarDashboard],
    providers: [
      provideHttpClient(),
      {
        provide: TechRadarApi,
        useValue: {
          getTechnologies: getTechnologiesSpy.and.returnValue(mergedProps.technologies)
        }
      },
    ]
  })
    .compileComponents();

  const fixture = TestBed.createComponent(TechRadarDashboard);
  const component = fixture.componentInstance;
  fixture.detectChanges();

  return {
    fixture,
    component,
    getTechnologiesSpy,
  }
}

const angularTechnology = [{
  name: 'Angular',
  kategorie: 'Kategorie 1',
  ring: 'Adopt',
  description: 'Beschreibung',
}];

interface Props {
  technologies: Observable<Technology[]>
}
