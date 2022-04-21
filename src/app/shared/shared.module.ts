import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './services/character/character.service';



@NgModule({
  declarations: [],
  providers: [
    CharacterService
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
