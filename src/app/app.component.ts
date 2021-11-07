import { Component } from '@angular/core';
import { FilmsService } from './services/films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ghibliApp';
  constructor (private filmService: FilmsService){
    this.filmService.getFlims().subscribe(resp=>console.log(resp));
  }
}
