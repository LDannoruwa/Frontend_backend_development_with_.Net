import { Component } from '@angular/core';
import { SightingService } from '../services/sighting.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sighting } from '../models/sighting.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-sighting',
  templateUrl: './view-sighting.component.html',
  styleUrls: ['./view-sighting.component.css']
})
export class ViewSightingComponent {

  public showImageInputButton:boolean =false; //show/hide image upload button

  //global object
  sightingDetails :Sighting = {
    //set to default values
    id: 0,
    make: "",
    model: "",
    registration: "",
    location: "",
    observedDateTime: "",
    image: "", //image name as a string
    imageSrc: "", //image link (path + name)
  };

  constructor(private route: ActivatedRoute, private sightingService: SightingService, private router: Router, private http: HttpClient){
    
  }

  ngOnInit(){ //ngOnInit : lifecycle hook
       //get id from routeLink
       this.route.paramMap.subscribe({
        next: (params)=>{
          const id = params.get('id');
  
          if(id){
            //call api 
            //(+id): convert string to id
            this.sightingService.getSightingById(+id).subscribe({
              next:(response)=>{
                this.sightingDetails = response;
              }
            });
          }
        }
      });

      this.dateValidation(); //for date and time validation
  }
  //-----------------------------------------------------------------------


  //---------------------------[Start : Update form]----------------------------------------  
  //Image file path
  imageSrc:string ="/assets/img/default-image.jpg"; //default image path

  //Image in File type
  imageFile:File |null = null;

  //access the file
  handleFileInput(e:any){
    if(e.target.files){
      //show image preview
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      //set imageFile
      this.imageFile = e.target.files[0];

      //update image name
      this.sightingDetails.image = e.target.files[0].name;

      reader.onload = (event:any) =>{
        this.imageSrc = event.target.result;
      }
    }
  }

  updateFormData(){
    const formData: FormData = new FormData();
    
    //Get input values from component.html
    formData.append("make", this.sightingDetails.make);
    formData.append("model", this.sightingDetails.model);
    formData.append("registration", this.sightingDetails.registration);
    formData.append("location", this.sightingDetails.location);
    formData.append("observedDateTime", this.sightingDetails.observedDateTime);

    //set image name, image File
    formData.append("image", this.sightingDetails.image);

    if(this.imageFile != null){
      formData.append("imageFile", this.imageFile, this.sightingDetails.image); //file, fileName
    }
    
    //submit formdata to api
    this.sightingService.updateSighting(this.sightingDetails.id, formData).subscribe({
      next:(response) =>{
        //navigate back to the sightings list page
        this.router.navigateByUrl('/sightings');
      }
    });
  }
  //---------------------------[End : Update form]----------------------------------------


  //---------------------------[Start : Delete form]--------------------------------------
  deleteFormData(id: number){ //define function: to show delete
    this.sightingService.deleteSighting(id).subscribe({
      next:(response)=>{
        //navigate back to the sightings list page
        this.router.navigateByUrl('/sightings');
      }
    });
  }
  //---------------------------[Start : Delete form]--------------------------------------


  //--------------------------------------------------------------------------------------
  toggleFormImageFileInputButton(){ //This function show/hide image upload button
    this.showImageInputButton = !this.showImageInputButton;
  }
  //-------------------------------------------------------------------------

  
  //-----------------------[Start : form - Date and time validation]---------
  //propery binding in .html file
  maxDateTimeForm:any; 

  dateValidation(){
    var date = new Date();

    var year:any = date.getFullYear(); //year
    var month:any = date.getMonth()+1; //month
    var todayDate:any = date.getDate(); //date

    var hours:any = date.getHours(); //hours
    var minutes:any = date.getMinutes(); //minutes


    if(todayDate < 10){
      todayDate = "0" + todayDate; //'0'+6=06  |'0'+29=029 (This should be eliminated)
    }

    if(month < 10){
      month ="0" + month;
    }

    if(hours < 10){
      hours ="0" + hours;
    }

    if(minutes < 10){
      minutes ="0" + minutes;
    }

    this.maxDateTimeForm = year +"-"+ month +"-"+ todayDate +"T"+ hours +":"+ minutes;
  }
  //-----------------------[End : form - Date and time validation]--------------------------
}
