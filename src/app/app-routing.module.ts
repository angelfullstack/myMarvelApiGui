import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreRoutingModule } from './core/core-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => CoreRoutingModule
  },
  //  TODO: 404
  // {
  //   path: '**', component: PageNotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
