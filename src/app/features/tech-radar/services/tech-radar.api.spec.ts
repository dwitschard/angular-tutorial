import {TestBed} from '@angular/core/testing';

import {HttpClient, provideHttpClient} from '@angular/common/http';
import {Technology} from '../tech-radar.types';
import {of} from 'rxjs';
import {TechRadarApi} from './tech-radar.api';

describe('Tech Radar API Test', () => {

  describe('TestBed Test', () => {

    let service: TechRadarApi;
    let getTechnologySpy = jasmine.createSpy('get')

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          TechRadarApi,
          {
            provide: HttpClient,
            useValue: {
              get: getTechnologySpy
            }
          }
        ],
      });
      service = TestBed.inject(TechRadarApi);
    });

    it('should return Technologies from API', (done) => {
      const expectedResult: Technology[] = [{
        name: 'Angular',
        kategorie: 'Kategorie 1',
        ring: 'Adopt',
        description: 'Beschreibung',
      }]
      getTechnologySpy.and.returnValue(of(expectedResult))

      service.getTechnologies().subscribe(result => {
          expect(result).toEqual(expectedResult)
          done();
        }
      )
    });
  })

  describe('UnitTest', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>
    let techRadarApi: TechRadarApi;

    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj<HttpClient>('http', ['get']);
      techRadarApi = new TechRadarApi(httpClientSpy);
    });

    it('should return Technologies from API', (done) => {
      const expectedResult: Technology[] = [{
        name: 'Angular',
        kategorie: 'Kategorie 1',
        ring: 'Adopt',
        description: 'Beschreibung',
      }]
      httpClientSpy.get.and.returnValue(of(expectedResult));

      techRadarApi.getTechnologies().subscribe(result => {
          expect(result).toEqual(expectedResult)
          done();
        }
      )
    });
  });
});


