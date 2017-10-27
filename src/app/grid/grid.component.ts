import { Component, OnInit } from '@angular/core';
import { HpService } from '../hp/hp.service';
import { Character } from '../character/character';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
characters: any[];
favorites: Character[];
  constructor(private hp: HpService) {   this.characters = []; }

  ngOnInit() {
    //hp = new HpService();
    this.hp.characters.subscribe((c: any)=>{
      this.characters = c;
    })
    this.favorites = this.hp.getCart();
  }

  favorite(character) {
    this.hp.addToFavorites(character);
    console.log("click");
  }

}
