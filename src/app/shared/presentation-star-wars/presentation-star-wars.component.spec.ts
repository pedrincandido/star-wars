import { Renderer2, Type } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PresentationStarWarsComponent } from './presentation-star-wars.component';

class MockRenderer {
  addClass(document: string, cssClass: string) {
  }

  removeClass(el: any, name: string) {

  }
}

describe('PresentationStarWarsComponent', () => {
  let component: PresentationStarWarsComponent;
  let fixture: ComponentFixture<PresentationStarWarsComponent>;
  let renderer2: Renderer2;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationStarWarsComponent],
      imports:
        [
          RouterTestingModule.withRoutes([
            { path: 'home', redirectTo: '' }
          ]),
          NoopAnimationsModule
        ],
      providers: [
        { provide: Renderer2, useClass: MockRenderer }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationStarWarsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be add body class', () => {
    const removeClassSpy = spyOn(component, 'removeClass').and.stub();
    const rendererSpy = spyOn(renderer2, 'addClass').and.callThrough();

    component.ngOnInit();

    expect(removeClassSpy).toHaveBeenCalled();
    expect(rendererSpy).toHaveBeenCalled();
  });

  it('should be remove body class', fakeAsync(() => {
    const rendererSpy = spyOn(renderer2, 'removeClass').and.callThrough();
    spyOn(router, 'navigateByUrl');

    component.removeClass();

    tick(10000);

    expect(rendererSpy).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('home');
  }));

});
