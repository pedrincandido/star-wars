import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PresentationStarWarsComponent } from './presentation-star-wars/presentation-star-wars.component';
import { ItemListComponent } from './tile-list/components/item-list/item-list.component';
import { TileListComponent } from './tile-list/tile-list.component';

@NgModule({
  declarations: [
    PresentationStarWarsComponent,
    ItemListComponent,
    TileListComponent,
    HeaderComponent,
    NavigationComponent,
    HeroComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    PresentationStarWarsComponent,
    TileListComponent,
    HeaderComponent,
    NavigationComponent,
    HeroComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
