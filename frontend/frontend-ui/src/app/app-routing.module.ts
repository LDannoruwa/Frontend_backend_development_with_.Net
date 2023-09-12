import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SightingListComponent } from './features/sightings/sighting-list/sighting-list.component';
import { AddSightingComponent } from './features/sightings/add-sighting/add-sighting.component';
import { ViewSightingComponent } from './features/sightings/view-sighting/view-sighting.component';

const routes: Routes = [
  //add routes
  //path for sighting list
  {
    path: 'sightings', //if I nevigate to sighttings
    component: SightingListComponent, //then load SightingListComponent
  },

  //path for add button
  {
    path: 'sightings/add',
    component: AddSightingComponent,
  },

  //path for view link in sighting list table: view by id
  {
    path: 'sightings/view/:id',
    component: ViewSightingComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
