import {Component, Input, input} from '@angular/core';
import {Technology} from '../../tech-radar.types';

@Component({
  selector: 'app-table-tech-radar',
  imports: [],
  template: `
    <h3>Table</h3>

    <table class="table">
      <div class="th">Technology</div>
      <div class="th">Ring</div>
      <div class="th">Kategorie</div>
      <div class="th">Beschreibung</div>

      @for (technology of technologies; track technology.name) {
        <div class="tech_name">{{ technology.name }}</div>
        <div class="tech_ring">{{ technology.ring }}</div>
        <div class="tech_category">{{ technology.kategorie }}</div>
        <div class="tech_description">{{ technology.description }}</div>
      }
    </table>
  `,
  styles: `
    .th {
        font-weight: bold;
    }

    .table {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  `
})
export class TableTechRadar {
  @Input() technologies: Technology[] = []
}
