import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedComponent } from './components/featured/featured.component';
import { FeaturedComicComponent } from './components/featured-comic/featured-comic.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturedComponent
  },
  {
    path: 'comic/:id',
    component: FeaturedComicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedRoutingModule { }
