import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './services/character/character.service';
import { CharacterComponent } from './components/character/character.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ComicGalleryComponent } from './components/comic-gallery/comic-gallery.component';

@NgModule({
  providers: [CharacterService],
  declarations: [
    CharacterComponent,
    GalleryComponent,
    ComicGalleryComponent
  ],
  exports: [
    CharacterComponent,
    ComicGalleryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
