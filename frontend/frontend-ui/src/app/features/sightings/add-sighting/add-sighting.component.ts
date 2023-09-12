import { Component, OnDestroy } from '@angular/core';
import { SightingService } from '../services/sighting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sighting',
  templateUrl: './add-sighting.component.html',
  styleUrls: ['./add-sighting.component.css']
})
export class AddSightingComponent {

  //---------------- [Start : image file parameters] -----------------
  //Image file name
  image:string = "";
  
  //Image file path
  imageSrc:string ="/assets/img/default-image.jpg"; //default image path

  //Image in File type
  imageFile:any;
  //---------------- [End : image file parameters] -----------------

  constructor(private sightingService: SightingService, private router: Router){

  }

  ngOnInit(){
      this.dateValidation();
  }

  //-----------------------[Start : access the file]-----------------------
  handleFileInput(e:any){
    if(e.target.files){
      //show image preview
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      //set imageFile
      this.imageFile = e.target.files[0];

      //Set image name
      this.image = e.target.files[0].name;

      reader.onload = (event:any) =>{
        this.imageSrc = event.target.result;
      }
    }
  }
  //-----------------------[End : access the file]--------------------------


  //-------------------------- [Start : Add data to FormData] --------------------------------
  addFormData(FormMake: any, FormModel: any, FormRegistration: any, FormLocation: any, FormDateTime: any, FormImage: any){
    const formData: FormData = new FormData();
    
    //Get input values from component.html
    formData.append("make",FormMake.value);
    formData.append("model",FormModel.value);
    formData.append("registration",FormRegistration.value);
    formData.append("location",FormLocation.value);
    formData.append("observedDateTime",FormDateTime.value);

    //set image name, image File
    formData.append("image", this.image);
    formData.append("imageFile", this.imageFile, this.image); //file, fileName

    //submit data in API
    this.sightingService.addSighting(formData).subscribe({
      next:(response) =>{
        
      //navigate back to the sightings list page
      this.router.navigateByUrl('/sightings');
      }
    });
  }
  //-------------------------- [End : Add data to FormData] --------------------------------


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
