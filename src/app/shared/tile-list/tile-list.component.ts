import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../interfaces/people.interface';

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.scss']
})
export class TileListComponent {
  @Input() titleList: Result;
}
