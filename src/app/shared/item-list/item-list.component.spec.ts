import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { ItemListComponent } from './item-list.component';
import { CustomSearchService } from '../services/custom-search/custom-search.service';
import { of } from 'rxjs';

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
    },
    {
      kind: '',
      title: 'teste',
      link: 'teste'
    }
  ]
};

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let customSeachService: CustomSearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: CustomSearchService, useValue: { getGoogleSearch: (search: string) => Promise.resolve() }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    component.title = 'teste';
    customSeachService = TestBed.inject(CustomSearchService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be ng init', () => {
    const searchGoogleApiSpy = spyOn(component, 'searchGoogleApi').and.stub();

    component.ngOnInit();

    expect(searchGoogleApiSpy).toHaveBeenCalled();
  });

  it('should be call search google and return values', fakeAsync(() => {
    spyOn(customSeachService, 'getGoogleSearch').and.returnValue(of(googleSearchMock).toPromise());

    component.searchGoogleApi();

    flush();

    expect(component.backgroundUrl).toBe(`url(${googleSearchMock.items[0].link})`);
  }));
});
