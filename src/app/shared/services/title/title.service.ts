import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  url = 'https://swapi.co/api/';

  constructor(
    private http: HttpClient
  ) { }

  getPeople(url = `${this.url}people/`): Observable<Data> {
    return this.http.get<Data>(url);
  }
}
