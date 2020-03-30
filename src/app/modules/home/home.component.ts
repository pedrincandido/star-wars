import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/shared/interfaces/people.interface';
import { TitleService } from 'src/app/shared/services/title/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  peopleData: Data;
  isNext: boolean | string;
  isPrevious: boolean | string;

  constructor(
    private titleService: TitleService,
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(url?: string) {
    this.titleService.getPeople(url).subscribe(res => {
      this.peopleData = res;
      this.isPrevious = res.previous ?? false;
      this.isNext = res.next ?? false;
    });
  }

  increasePage() {
    this.getPeople(this.peopleData?.next);
  }

  decreasePage() {
    this.getPeople(this.peopleData?.previous);
  }
}
