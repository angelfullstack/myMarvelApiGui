import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  subs: Subscription[] = [];
  offset: number = 0;
  @Input() characterId: number | undefined;
  constructor(private characterService:CharacterService) { }

  ngOnInit(): void {
    this.loadComics();
  }

  loadComics(loadMore:boolean = false): void {
    console.log('loadMore', loadMore)
    loadMore ? this.offset += 20 : null;
    this.comicSub ? this.comicSub.unsubscribe() : null;
    this.subs.push(
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
    })
    );
    console.log(this.comicSub)
    console.log(this.subs.length)
  }

  manageGalleryEmitter(evt: any){
    console.log(evt)
    if(evt === 'load_more'){
      console.log('jeejejejejejejejejejej')
      this.loadComics(true);
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }



}
