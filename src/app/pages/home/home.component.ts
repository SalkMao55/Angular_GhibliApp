import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private filmService: FilmsService ) { }

  ngOnInit(): void {
    this.filmService.getFlims().subscribe( resp => console.log(resp));
  }

}
