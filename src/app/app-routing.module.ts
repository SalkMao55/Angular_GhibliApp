import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules Rounting
import { Routes, RouterModule } from "@angular/router";
// Components to route
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { PeopleComponent } from './pages/people/people.component';
import { SpeciesComponent } from './pages/species/species.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';

// Array of Routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes ) //Import RouterModule with array
  ],
  exports: [ RouterModule ] // For use Module in app.module.ts
})
export class AppRoutingModule { }
