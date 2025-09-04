import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Technology} from '../tech-radar.types';

@Injectable({
  providedIn: 'root'
})
export class TechRadarApi {

  //private http = inject(HttpClient)

  constructor(private http: HttpClient) {
  }

  private apiUrl = 'https://65c1f652f7e6ea59682a27c8.mockapi.io/Technologies'

  public getTechnologies() {
    return this.http.get<Technology[]>(this.apiUrl) // filter
  }

  public getRandomData(){
    return setTimeout(() => {}, 0)
  }

}
