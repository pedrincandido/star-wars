import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.scss']
})
export class TileListComponent implements OnInit {
  @Input() titleList: any;

  constructor() { }

  ngOnInit() {
  }
}
