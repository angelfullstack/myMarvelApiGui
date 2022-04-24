import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './services/character/character.service';
import { ComicService  } from './services/comic/comic.service';
import { CharacterComponent } from './components/character/character.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ComicGalleryComponent } from './components/comic-gallery/comic-gallery.component';
import { ComicComponent } from './components/comic/comic.component';

@NgModule({
  providers: [
    CharacterService,
    ComicService
  ],
  declarations: [
    CharacterComponent,
    GalleryComponent,
    ComicGalleryComponent,
    ComicComponent
  ],
  exports: [
    CharacterComponent,
    ComicGalleryComponent,
    ComicComponent
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
