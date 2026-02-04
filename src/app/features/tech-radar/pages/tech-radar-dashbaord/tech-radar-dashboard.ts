import {Component, inject, OnInit} from '@angular/core';
import {TechRadarApi} from '../../services/api/tech-radar.api';
import {toSignal} from '@angular/core/rxjs-interop';
import {ListTechRadar} from '../../dumb_components/list-tech-radar/list-tech-radar';
import {AsyncPipe} from '@angular/common';
import {TableTechRadar} from '../../dumb_components/table-tech-radar/table-tech-radar';
import {Technology} from '../../tech-radar.types';

@Component({
  selector: 'app-tech-radar',
  imports: [
    ListTechRadar,
    AsyncPipe,
    TableTechRadar
  ],
  template: `
    <h1>Tech Radar</h1>
    <div>
      <!--  Alternative: -->
      <!--@if (technologies$ | async; as tech) {
        <app-table-tech-radar [technologies]="tech"/>
      }-->
      <app-table-tech-radar [technologies]="(technologies$ | async) ?? []"/>

      <app-list-tech-radar [technologies]="technolgiesSignal() ?? []"/>

    </div>
  `,
  styles: ``
})
export class TechRadarDashboard implements OnInit{

  techRadarApi = inject(TechRadarApi)

  techList: Technology[] = []

  technologies$ = this.techRadarApi.getTechnologies()
  technolgiesSignal = toSignal(this.technologies$)

  ngOnInit(): void {

    this.technologies$.subscribe(
      (technologies) => this.techList = technologies
    )
  }


}
