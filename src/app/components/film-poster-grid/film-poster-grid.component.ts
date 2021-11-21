import { Component, Input, OnInit } from '@angular/core';
import { FilmResponse } from 'src/app/interfaces/films-interface';

@Component({
  selector: 'app-film-poster-grid',
  templateUrl: './film-poster-grid.component.html',
  styleUrls: ['./film-poster-grid.component.scss']
})
export class FilmPosterGridComponent implements OnInit {

  // Propertie to get Films from Home Component
  @Input() films?: FilmResponse[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.films);
  }

}
