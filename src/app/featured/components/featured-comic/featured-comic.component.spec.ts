import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedComicComponent } from './featured-comic.component';

describe('FeaturedComicComponent', () => {
  let component: FeaturedComicComponent;
  let fixture: ComponentFixture<FeaturedComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
