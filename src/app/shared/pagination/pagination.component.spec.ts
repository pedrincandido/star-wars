import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;

  beforeEach(() => {
    component = new PaginationComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit increasePage', () => {
    const increasePageSpy = spyOn(component.increasePage, 'emit');

    component.onIncreasePage();

    expect(increasePageSpy).toHaveBeenCalled();
  });

  it('should emit decreasePage', () => {
    const decreasePageSpy = spyOn(component.decreasePage, 'emit');

    component.onDecreasePage();

    expect(decreasePageSpy).toHaveBeenCalled();
  });

});
