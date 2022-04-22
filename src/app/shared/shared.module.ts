import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './services/character/character.service';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  providers: [CharacterService],
  declarations: [
    CharacterComponent
  ],
  exports: [
    CharacterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
