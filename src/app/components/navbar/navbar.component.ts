import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  
  /* @ViewChild('.header') header?: HTMLElement;
  @ViewChild('#btnHamburger') btnHamb? : HTMLElement;  */

  mostrarOverlay: boolean = false;
  openAnimation: boolean = false;

  constructor() {
    
   }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
  }

  
  public get showOverlay() : boolean {
    return this.mostrarOverlay;
  }

  
  public get addOpen() : boolean {
    return this.openAnimation;
  }
  
  

  cambiarFormaHamb( evento: any ) {
    /* if (this.header?.classList.contains('open')) {
      this.header.classList.remove('open'); // Remove class for animation
      this.btnHamb?.classList.remove('fade-in');
      this.btnHamb?.classList.add('fade-out');
    } else {
      this.header?.classList.add('open');// Add class for animation
      this.btnHamb?.classList.remove('fade-out');
      this.btnHamb?.classList.add('fade-in');
    } */
    if (this.openAnimation){
      this.openAnimation = false;
      this.mostrarOverlay = false;
    } else {
      this.openAnimation = true;
      this.mostrarOverlay = true;
    }
  }

}
