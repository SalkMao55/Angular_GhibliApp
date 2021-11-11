import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FilmResponse } from '../interfaces/films-interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor( private http: HttpClient ) { }
  
  /*
    FilmResponse[]: Indicate that we are going to receive an Array of films
    The Type returned from http.get() and getFlims() should be Observable<FilmResponse[]>
  */
  getFlims():Observable<FilmResponse[]>{
    return this.http.get<FilmResponse[]>('https://ghibliapi.herokuapp.com/films/');
  }
}
