import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Swiper } from "swiper";
import { FilmResponse } from 'src/app/interfaces/films-interface';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  // Input to get data property "films" from "pages/home"
  @Input () films?: FilmResponse[];
  // Swiper with temporal initialize
  public swiper: Swiper = new Swiper('',{});

  constructor() { }

  // Source after View was initializate
  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

  ngOnInit(): void {
    console.log(this.films);
  }

  // Move to pevious movie
  onSlidePrev () {
    this.swiper.slidePrev();
  }

  // Move to the next film
  onSlideNext () {
    this.swiper.slideNext();
  }

}
