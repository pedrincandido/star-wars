import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalElements: number;
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() isLoading: boolean;
  @Input() next: number;
  @Input() previous: number;
  @Input() isPrevious: boolean;
  @Input() isNext: boolean;
  @Output() increasePage: EventEmitter<void> = new EventEmitter<void>();
  @Output() decreasePage: EventEmitter<void> = new EventEmitter<void>();

  onIncreasePage(): void {
    this.increasePage.emit();
  }

  onDecreasePage(): void {
    this.decreasePage.emit();
  }
}
