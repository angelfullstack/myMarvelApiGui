import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './compoments/layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [
  ],
  exports: [
    LayoutComponent,
    SharedModule
  ]
})
export class CoreModule { }
