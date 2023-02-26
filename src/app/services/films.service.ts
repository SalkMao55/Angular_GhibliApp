import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FilmResponse } from '../interfaces/films-interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  url = 'http://192.168.3.61:3000';
  oldUrl = 'https://ghibliapi.herokuapp.com/films/';
  constructor( private http: HttpClient ) { }
  
  /*
    FilmResponse[]: Indicate that we are going to receive an Array of films
    The Type returned from http.get() and getFlims() should be Observable<FilmResponse[]>
  */
  getFlims():Observable<FilmResponse[]>{
    return this.http.get<FilmResponse[]>(`${this.url}/films`);
  }
}
