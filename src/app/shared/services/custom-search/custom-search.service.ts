import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomSearchService {

  constructor(
    private http: HttpClient
  ) { }

  getGoogleSearch(search: string): Promise<any> {
    const httParams = new HttpParams()
      .append('key', environment.client_id)
      .append('cx', environment.cx)
      .append('q', search)
      .append('searchType', 'image')
      .append('num', '1');

    return this.http.get(environment.custom_search, { params: httParams }).toPromise();
  }
}
