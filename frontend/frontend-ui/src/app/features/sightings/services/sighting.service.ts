import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sighting } from '../models/sighting.model';

@Injectable({
  providedIn: 'root'
})
export class SightingService {

  constructor(private http: HttpClient) { }

  //communicate with api

  //1.Get All
  getAllSighting(): Observable<Sighting[]>{
    return this.http.get<Sighting[]>("https://localhost:7012/api/Sighting")
  }

  //2.Get by id
  getSightingById(id: number): Observable<Sighting>{
    return this.http.get<Sighting>("https://localhost:7012/api/Sighting/"+ id);
  }

  //3.Delete
  deleteSighting(id: number): Observable<Sighting>{
    return this.http.delete<Sighting>("https://localhost:7012/api/Sighting/"+ id);
  }

  //---------------------------------------------------------------------------------
  //4.Update
  updateSighting(id: number, formData: FormData): Observable<any>{
    return this.http.put<FormData>("https://localhost:7012/api/Sighting/"+ id, formData);
  }

  //5.Add
  addSighting(formData: FormData): Observable<any>{
    return this.http.post<FormData>("https://localhost:7012/api/Sighting", formData);
  }
  //-------------------------------------------------------------------------------
}
