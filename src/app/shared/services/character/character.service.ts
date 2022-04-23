import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) {

  }
  getCharacterById(id: number = environment.featuredCharacterID): Observable<any> {
    return this.httpClient.get(`${environment.mvUrl}/characters/${id}`);
  }
  getComicsByCharacterId(id: number = environment.featuredCharacterID, limhit:number = 16,offset: number = 0): Observable<any> {
    return this.httpClient.get(`${environment.mvUrl}/characters/${id}/comics`);
  }

  getEventsByCharacterId(id: number = environment.featuredCharacterID): Observable<any> {
    return this.httpClient.get(`${environment.mvUrl}/characters/${id}/events`);
  }

  getSeriessByCharacterId(id: number = environment.featuredCharacterID): Observable<any> {
    return this.httpClient.get(`${environment.mvUrl}/characters/${id}/series`);
  }

  getStoriessByCharacterId(id: number = environment.featuredCharacterID): Observable<any> {
    return this.httpClient.get(`${environment.mvUrl}/characters/${id}/stories`);
  }

  getCharactersByName(name: string = environment.featuredCharacterName): Observable<any> {
    return this.httpClient.get(`${environment.mvUrl}/characters`, { params: new HttpParams().set('nameStartsWith', name) });
  }

  getCharacters(data: any = {}): Observable<any> {
    return this.httpClient.get(`${environment.mvUrl}/characters`);
  }
}
