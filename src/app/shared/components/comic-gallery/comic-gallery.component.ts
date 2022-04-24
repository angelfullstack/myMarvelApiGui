import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterService } from '../../services/character/character.service';

@Component({
  selector: 'app-comic-gallery',
  templateUrl: './comic-gallery.component.html',
  styleUrls: ['./comic-gallery.component.scss']
})
export class ComicGalleryComponent implements OnInit, OnDestroy {
  comics: any[] | undefined;
  comicSub: Subscription | undefined;
  offset: number = 0;
  @Input() characterId: number | undefined;
  constructor(
    private characterService: CharacterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadComics();
  }

  loadComics(loadMore: boolean = false): void {
    loadMore ? this.offset += 20 : null;
    this.comicSub?.unsubscribe();
    this.comicSub = this.characterService.getComicsByCharacterId(this.characterId, this.offset).subscribe({
      next: (res) => {
        res?.data?.results && res.data.results.length > 0
          ? this.comics = res.data.results
          : null;
        console.log(this.comics);
      },
      error: (err) => {
        // TODO handle error
      }
    });
    console.log(this.comicSub);
  }

  manageGalleryEmitter(evt: any) {
    console.log(evt)
    if (evt === 'load_more') {
      this.loadComics(true);
    }
  }

  manageGalleryItemEmitter(evt: any) {
    (evt && evt.itemId) ? this.router.navigate(['/comic',evt.itemId]) : null;
  }

  ngOnDestroy(): void {
    this.comicSub?.unsubscribe();
  }

}
