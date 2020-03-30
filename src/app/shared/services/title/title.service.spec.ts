import { TestBed, fakeAsync } from '@angular/core/testing';

import { TitleService } from './title.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Data } from '../../interfaces/people.interface';

const peopleMock: Data = {
  count: 87,
  next: 'https://swapi.co/api/people/?page=2',
  previous: null,
  results: [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
      ],
      species: [
        'https://swapi.co/api/species/1/'
      ],
      vehicles: [
        'https://swapi.co/api/vehicles/14/',
        'https://swapi.co/api/vehicles/30/'
      ],
      starships: [
        'https://swapi.co/api/starships/12/',
        'https://swapi.co/api/starships/22/'
      ],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.co/api/people/1/'
    },

  ]
};

describe('TitleService', () => {
  let service: TitleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TitleService
      ]
    });
    service = TestBed.inject(TitleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call get people from http check url', fakeAsync(() => {
    service.getPeople().subscribe(res => {
      expect(res).toEqual(peopleMock);
    });

    const urlReq = 'https://swapi.co/api/people/';
    const req = httpMock.expectOne(urlReq);

    expect(req.request.method).toEqual('GET');

    req.flush(peopleMock);
  }));
});
