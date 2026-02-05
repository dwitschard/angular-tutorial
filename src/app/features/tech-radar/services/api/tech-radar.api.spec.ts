import {vi} from "vitest";
import {TestBed} from '@angular/core/testing';

import {HttpClient} from '@angular/common/http';
import {Technology} from '../../tech-radar.types';
import {of} from 'rxjs';
import {TechRadarApi} from './tech-radar.api';

describe('Tech Radar API Test', () => {

  describe('TestBed Test', () => {

    let service: TechRadarApi;
    let getTechnologySpy = vi.fn();

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

    it('should return Technologies from API', async () => {
      const expectedResult: Technology[] = [{
        name: 'Angular',
        kategorie: 'Kategorie 1',
        ring: 'Adopt',
        description: 'Beschreibung',
      }];
      getTechnologySpy.mockReturnValue(of(expectedResult));

      service.getTechnologies().subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    });
  });

  describe('UnitTest', () => {
    let techRadarApi: TechRadarApi;

    beforeEach(() => {
      techRadarApi = new TechRadarApi(vi.fn as any);
    });

    it('should return Technologies from API', async () => {
      const expectedResult: Technology[] = [{
        name: 'Angular',
        kategorie: 'Kategorie 1',
        ring: 'Adopt',
        description: 'Beschreibung',
      }];
      vi.spyOn(techRadarApi, 'getTechnologies').mockReturnValue(of(expectedResult))

      techRadarApi.getTechnologies().subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
