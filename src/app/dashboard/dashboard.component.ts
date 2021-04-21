import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  misHeroes: Hero[]=[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    //this.heroService.getHeroes()
      //.subscribe(heroes => this.heroes = heroes.slice(1, 5));

      this.heroService.getHeroes()
      .subscribe(heroes =>{
        heroes.reverse();

        heroes.sort((a,b)=>b.power - a.power);
        
        for(let i=0; i<heroes.length; i++){
          this.heroes = heroes;
        }

      });
  }
}