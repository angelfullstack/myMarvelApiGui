import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedComponent } from '../featured/components/featured/featured.component';
import { FeaturedModule } from '../featured/featured.module';
import { FeaturedRoutingModule } from '../featured/featured.routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => FeaturedRoutingModule 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
