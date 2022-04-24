import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComicService } from 'src/app/shared/services/comic/comic.service';

@Component({
  selector: 'app-featured-comic',
  templateUrl: './featured-comic.component.html',
  styleUrls: ['./featured-comic.component.scss']
})
export class FeaturedComicComponent implements OnInit, OnDestroy {
  comicId: number | undefined;
  subs: Subscription[] = [];
  comic: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private comicService: ComicService

    ) { }

  ngOnInit(): void {
   this.subs.push( this.activatedRoute.params.subscribe({
      next: (params) => {
        this.comicId = params['id'];
        if(this.comicId){
          this.loadComic(this.comicId);

        }
      },
      error: (err) =>{ 
        // TODO handle error
      }
    }))
  }

  loadComic(comicId:number): void{
    this.subs.push(this.comicService.getComicById(comicId).subscribe({
      next: (res) => {
        this.comic = res?.data?.results?.[0];
      }, error: (err) => {
        // TODO handle error
      }
    }))
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
