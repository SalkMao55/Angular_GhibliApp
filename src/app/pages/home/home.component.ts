import { Component, OnInit } from '@angular/core';
import { FilmResponse } from 'src/app/interfaces/films-interface';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // Array for save movies and use them inside the slideshow
  public films : FilmResponse[] = [];

  constructor( private filmService: FilmsService ) { }

  ngOnInit(): void {
    this.filmService.getFlims().subscribe( resp => {
      // console.log(resp);
      this.films = resp; // Gets the Array of films
      console.log(this.films);
    });
  }

}
