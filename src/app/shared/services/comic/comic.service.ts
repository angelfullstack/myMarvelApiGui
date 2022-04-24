import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private httpClient: HttpClient) { }

  getComicById(id: number): Observable<any> {
    return this.httpClient.get(`${environment.mvUrl}/comics/${id}`);
  }
}
