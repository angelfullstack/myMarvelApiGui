import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
@Input() galleryData;
@Output() galleryEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.galleryEmitter.emit('load-more');
  }

}
