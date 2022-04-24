import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {
@Input() galleryDataInput: any;
galleryData: any;
@Output() galleryEmitter = new EventEmitter<string>();
@ViewChildren("galleryItem") galleryItems: QueryList<ElementRef> = new QueryList<ElementRef>();

@HostListener("window:scroll", ['$event'])
  check($event:Event){
    console.log('POS',window.scrollY > this.galleryItems.last.nativeElement.offsetTop - window.innerHeight/2,window.scrollY,this.galleryItems.last.nativeElement.offsetTop - window.innerHeight/2);
    if( !this.isLoading && this.galleryItems && this.galleryItems.last && window.scrollY  > this.galleryItems.last.nativeElement.offsetTop - window.innerHeight/2){
      console.log('-- Scroll reached--')
      this.isLoading=true; 
      this.loadMore();
    }
  }

  isLoading: boolean | undefined;

  galleryLastElementScrollHeight: number = 10000000;
  
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes['galleryDataInput']){
      if(!this.galleryData) {
        this.galleryData = this.galleryDataInput;
      } else if ( this.galleryData && this.galleryDataInput[0].id != this.galleryData[0].id) {
        this.galleryData = [...this.galleryData,...this.galleryDataInput];
      }
      this.isLoading = false;
    }
    console.log('changes',changes);

  }


 loadMore():void {
  this.galleryEmitter.emit('load_more');
 }

}   
