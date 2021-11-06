import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { LocationsComponent } from './locations/locations.component';
import { FilmsComponent } from './films/films.component';
import { SpeciesComponent } from './species/species.component';
import { VehiclesComponent } from './vehicles/vehicles.component';



@NgModule({
  declarations: [
    HomeComponent,
    PeopleComponent,
    LocationsComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
