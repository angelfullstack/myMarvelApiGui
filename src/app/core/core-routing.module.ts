import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedComponent } from '../featured/components/featured/featured.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
