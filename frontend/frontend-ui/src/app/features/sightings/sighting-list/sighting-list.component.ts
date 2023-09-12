import { Component } from '@angular/core';
import { Sighting } from '../models/sighting.model';
import { SightingService } from '../services/sighting.service';

@Component({
  selector: 'app-sighting-list',
  templateUrl: './sighting-list.component.html',
  styleUrls: ['./sighting-list.component.css']
})
export class SightingListComponent {

  //global arry
  sightings: Sighting[] = [];

  constructor(private sightingService: SightingService){ //inject service
    this.viewAllSighting();
  }

  ngOnInit(){

  }

  //----------- [Start : show all sightings] ------------------
  viewAllSighting(){ //define function: to show all Sighting
    this.sightingService.getAllSighting().subscribe({
      next:(sightings) =>{
        this.sightings = sightings;
      },
      error: (response)=>{
        console.log(response);
      }
    });
  }
  //----------- [End : show all sightings] ------------------


  //----------- [Start : perform filter operation] ------------------
  //data binding
  searchInputTxt: any;
  radioBtnAnswer: any;

  searchBarFunction(){
    if(this.searchInputTxt != "" && this.radioBtnAnswer != ""){
      switch(this.radioBtnAnswer){
        case "make":{
          this.sightings = this.sightings.filter(res =>{
            return res.make.toLocaleLowerCase().match(this.searchInputTxt.toLocaleLowerCase());
          });
          break;
        }
        case "registration":{
          this.sightings = this.sightings.filter(res =>{
            return res.registration.toLocaleLowerCase().match(this.searchInputTxt.toLocaleLowerCase());
          });
          break;
        }
        case "model":{
          this.sightings = this.sightings.filter(res =>{
            return res.model.toLocaleLowerCase().match(this.searchInputTxt.toLocaleLowerCase());
          });
          break;
        }
      }
    }else{
      this.ngOnInit();
    }
  }
    //----------- [End : perform filter operation] ------------------
}