import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  url = 'https://swapi.co/api/';

  constructor(
    private http: HttpClient
  ) { }


  getPeople(url = `${this.url}people/`): Observable<People> {
    return this.http.get<People>(url);
  }
}
