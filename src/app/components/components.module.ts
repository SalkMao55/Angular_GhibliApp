import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent
  ]
})
export class ComponentsModule { }
