import { Component, OnInit } from '@angular/core';
import { HEROS } from '../util/hero-array';
import { Hero } from '../util//hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros = HEROS;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onExitEditor():void{
    this.selectedHero=null;
  }

  constructor() { }

  ngOnInit() {
  }

}
