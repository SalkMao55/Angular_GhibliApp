import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from "@angular/router";
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FilmPosterGridComponent } from './film-poster-grid/film-poster-grid.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    FilmPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    FilmPosterGridComponent
  ]
})
export class ComponentsModule { }
