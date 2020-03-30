import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-presentation-star-wars',
  templateUrl: './presentation-star-wars.component.html',
  styleUrls: ['./presentation-star-wars.component.scss'],
  animations: [
    trigger('star', [
      transition('void => *', [
        animate('10000ms ease-out',
          keyframes([
            style({
              transform: 'scale(1.5) translateY(-0.75em)',
              opacity: 0,
              offset: 0
            }),
            style({
              opacity: 1,
              offset: 0.2
            }),
            style({
              opacity: 1,
              transform: 'scale(1)',
              offset: 0.89
            }),
            style({
              opacity: 0,
              transform: 'translateZ(-1000em)',
              offset: 1
            })
          ])),
      ])
    ]),
    trigger('wars', [
      transition('void => *', [
        animate('10000ms ease-out',
          keyframes([
            style({
              transform: 'scale(1.5) translateY(0.5em)',
              opacity: 0,
              offset: 0
            }),
            style({
              opacity: 1,
              offset: 0.2
            }),
            style({
              opacity: 1,
              transform: 'scale(1)',
              offset: 0.9
            }),
            style({
              opacity: 0,
              transform: 'translateZ(-1000em)',
              offset: 1
            })
          ])),
      ])
    ]),
    trigger('byline', [
      transition('void => *', [
        animate('10000ms ease-out',
          keyframes([
            style({
              transform: 'translateZ(5em)',
              opacity: 0,
              offset: 0
            }),
            style({
              opacity: 1,
              offset: 0.2
            }),
            style({
              opacity: 1,
              transform: 'scale(1)',
              offset: 0.9
            }),
            style({
              opacity: 0,
              transform: 'translateZ(-1000em)',
              offset: 1
            })
          ])),
      ])
    ]),
  ]
})
export class PresentationStarWarsComponent implements OnInit {

  constructor(
    private router: Router,
    private render: Renderer2
  ) { }

  ngOnInit() {
    this.render.addClass(document.body, 'body-class');
    this.removeClass();
  }

  removeClass() {
    const source = timer(10000);
    source.subscribe(() => {
      this.render.removeClass(document.body, 'body-class');
      this.router.navigateByUrl('home');
    });
  }
}
