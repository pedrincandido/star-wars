import { Component, OnInit, Input } from '@angular/core';
import { CustomSearchService } from 'src/app/shared/services/custom-search/custom-search.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() title: string;
  backgroundUrl: string;

  constructor(
    private googleSearch: CustomSearchService
  ) { }

  ngOnInit(): void {
    this.searchGoogleApi();
  }

  async searchGoogleApi() {
    await this.googleSearch.getGoogleSearch(this.title).then(res => {
      this.backgroundUrl = `url(${res.items[0].link})`;
    });
  }
}
