import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationStarWarsComponent } from 'src/app/shared/presentation-star-wars/presentation-star-wars.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: PresentationStarWarsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
