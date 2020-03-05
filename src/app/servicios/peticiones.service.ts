import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  public url:string;
  constructor(private http: HttpClient ) { 
  
  this.url="http://www.omdbapi.com/?apikey=8d5a8aff&s=";
  }
  //A esta función se le pasa como parametro el título de la película en el componente
  obtener(busca:any):Observable<any>{
    return this.http.get(this.url + busca);
  }

}
