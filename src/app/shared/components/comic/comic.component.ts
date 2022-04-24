import { Location } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit, OnChanges {
  @Input() comicData: any;
  comicImages: any[] | undefined;
  selectedImage: any;
  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log('comic', this.comicData);
    this.comicData?.images && this.comicData.images.length > 0
      ? this.comicImages = this.comicData.images
      : null;
    this.comicImages && this.comicImages.length > 0  
      ? this.selectedImage = this.comicImages[(Math.floor(Math.random() * this.comicImages.length))]
      : null
      console.log('comics', this.comicImages)

      console.log('selectedimage', this.selectedImage)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  goBack(){
    this.location.back();
  }

}
