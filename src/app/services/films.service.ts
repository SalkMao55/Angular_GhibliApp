import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FilmResponse } from '../interfaces/films-interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor( private http: HttpClient ) { }

  getFlims():Observable<FilmResponse>{
    return this.http.get<FilmResponse>('https://ghibliapi.herokuapp.com/films/');
  }
}
