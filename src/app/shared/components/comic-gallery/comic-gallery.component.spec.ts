import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicGalleryComponent } from './comic-gallery.component';

describe('ComicGalleryComponent', () => {
  let component: ComicGalleryComponent;
  let fixture: ComponentFixture<ComicGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
