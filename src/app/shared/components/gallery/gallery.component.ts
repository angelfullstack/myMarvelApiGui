import { ViewportScroller } from '@angular/common';
import {  AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { ComicService } from '../../services/comic/comic.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges, AfterViewInit {
@Input() galleryDataInput: any;
@Input() type: string | undefined;
galleryData: any;
@Output() galleryEmitter = new EventEmitter<string>();
@Output() galleryItemEmitter = new EventEmitter<any>();
@ViewChildren("galleryItem") galleryItems: QueryList<ElementRef> = new QueryList<ElementRef>();
lastItemSub: Subscription | undefined;

@HostListener("window:scroll", ['$event'])
check($event:Event){
    // console.log(this.galleryItems.last.nativeElement.offsetTop -  window.outerHeight, window.scrollY);
    // console.log(this.galleryItems.last.nativeElement.getBoundingClientRect());
    if( !this.isLoading && this.galleryItems && this.galleryItems.last && window.scrollY  > this.galleryItems.last.nativeElement.offsetTop - window.innerHeight/2 - this.galleryItems.last.nativeElement.getBoundingClientRect().height) {
      this.isLoading=true; 
      this.loadMore();
    }
  }

  isLoading: boolean | undefined;
  galleryLastElementScrollHeight: number = 10000000;
  
  constructor(
    private comicService: ComicService,
    private router: Router,
    private scroller: ViewportScroller
    ) {}

  ngOnInit(): void {
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes['galleryDataInput']){
      if(!this.galleryData) {
        this.galleryData = this.galleryDataInput;
      } else if ( this.galleryData && this.galleryDataInput[0].id != this.galleryData[0].id) {
        this.galleryData = [...this.galleryData,...this.galleryDataInput];
      }
      this.comicService.fetchedComics$.next(this.galleryData);
      this.isLoading = false;
    }
  }

  ngAfterViewInit(): void {
    this.lastItemSub = this.comicService.lastItemId$.subscribe(id => {
      if(id){
        const storedItem = this.galleryDataInput.filter((item:any) => item.id == id)?.[0];
        if(storedItem){
          // window.scrollTo()
          this.lastItemSub?.unsubscribe();
         this.scroller.scrollToAnchor(id);
        }

      }
    })
  }


 loadMore():void {
  this.galleryEmitter.emit('load_more');
 }

 manageItemClick(item:any):void {
    this.comicService.lastItemId$.next(item.id)
    
    this.galleryItemEmitter.emit({itemId: item.id});
 }

}   
