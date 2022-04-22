import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from './components/featured/featured.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FeaturedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeaturedModule { }
