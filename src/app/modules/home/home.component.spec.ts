import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { of } from 'rxjs';
import { Data } from 'src/app/shared/interfaces/people.interface';

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

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let titleService: TitleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: TitleService, useValue: {
            getPeople: (url: string) => of()
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    titleService = TestBed.inject(TitleService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be call ng init', () => {
    const getPeopleSpy = spyOn(component, 'getPeople').and.stub();

    component.ngOnInit();

    expect(getPeopleSpy).toHaveBeenCalled();
  });

  it('should be get people', () => {
    spyOn(titleService, 'getPeople').and.returnValue(of(peopleMock));

    component.getPeople();

    expect(component.peopleData).toBe(peopleMock);
    expect(component.isPrevious).toBeFalse();
    expect(component.isNext).toEqual(peopleMock.next);
  });

  it('should be increase page', () => {
    const getPeopleSpy = spyOn(component, 'getPeople').and.stub();

    component.increasePage();

    expect(getPeopleSpy).toHaveBeenCalled();
  });

  it('should be decrease page', () => {
    const getPeopleSpy = spyOn(component, 'getPeople').and.stub();

    component.decreasePage();

    expect(getPeopleSpy).toHaveBeenCalled();
  });
});
