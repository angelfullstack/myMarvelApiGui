import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ComicService {
  fetchedComics$: BehaviorSubject<any> = new BehaviorSubject(null);
  lastItemId$: BehaviorSubject<any> = new BehaviorSubject(null);
  offset$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}
  getComicById(id: number): Observable<any> {
    return this.httpClient.get(`${environment.mvUrl}/comics/${id}`);
  }
}
