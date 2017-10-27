import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
//Custom interface
import { Character } from '../character/character';

const URL = "http://hp-api.herokuapp.com/api/characters";

@Injectable()
export class HpService {
  private characterSubject = new Subject<Character[]>();
  characters: Observable<Character[]>;
  imageCharacters: Character[];
  favorites: Character[];

  constructor(private http: HttpClient) {
    this.favorites = [];
    this.characters = this.characterSubject.asObservable();
    this.http.get<Character[]>(URL).subscribe(data => {
      console.log(data);
      this.characterSubject.next(data);
})
   }

   addToFavorites(favorite: Character) {
     this.favorites.push(favorite);
   }

   getCart () :Character[] {
      return this.favorites;
    }

}
