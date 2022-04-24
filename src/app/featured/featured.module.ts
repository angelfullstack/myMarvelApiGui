import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from './components/featured/featured.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturedRoutingModule} from './featured.routing.module';
import { FeaturedComicComponent } from './components/featured-comic/featured-comic.component'



@NgModule({
  declarations: [
    FeaturedComponent,
    FeaturedComicComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeaturedRoutingModule
  ]
})
export class FeaturedModule { }
