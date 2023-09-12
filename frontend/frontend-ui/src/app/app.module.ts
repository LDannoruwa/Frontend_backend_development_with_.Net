import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SightingListComponent } from './features/sightings/sighting-list/sighting-list.component';
import { AddSightingComponent } from './features/sightings/add-sighting/add-sighting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { ViewSightingComponent } from './features/sightings/view-sighting/view-sighting.component'; //import HttpClientModule 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SightingListComponent,
    AddSightingComponent,
    ViewSightingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //import module : responsible for submiting forms
    FormsModule,
    //--
    ReactiveFormsModule,

    //import module : responsible for communicate with API
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
