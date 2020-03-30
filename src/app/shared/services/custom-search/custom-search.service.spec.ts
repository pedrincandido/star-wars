import { TestBed, fakeAsync } from '@angular/core/testing';

import { CustomSearchService } from './custom-search.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpRequest } from '@angular/common/http';

const googleSearchMock = {
  config: {
    url: 'teste.com.br',
    method: 'GET'
  },
  data: {
    kind: '',
    url: {
      type: 'application/json',
      template: ''
    }
  },
  items: [
    {
      kind: '',
      title: 'teste',
      link: 'teste'
    }
  ]
};

describe('CustomSearchService', () => {
  let service: CustomSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CustomSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call get people from http with check url', fakeAsync(() => {
    service.getGoogleSearch('teste').then(res => {
      expect(res).toEqual(googleSearchMock);
    });

    const httpHeadersMock = new HttpHeaders().set('key', environment.client_id)
      .set('cx', environment.cx).set('q', 'teste').set('searchType', 'image').set('num', '1');

    const authHeadersMock = {
      headers: httpHeadersMock,
    };

    const req = httpMock.expectOne(request => {
      if (request.url === environment.custom_search) {
        return true;
      }
      return;
    });

    expect(req.request.method).toEqual('GET');

    req.flush(googleSearchMock, authHeadersMock);
  }));
});
