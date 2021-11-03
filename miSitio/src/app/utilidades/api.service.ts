import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) {
  }
 
  traerGet(url: string):Observable<Array<any>>{
    return <Observable<Array<any>>>this.http.get(environment.servidor + url);
  }

  traerPost(url:string, peticion:any):Observable<Array<any>>{
    return <Observable<Array<any>>>this.http.post(environment.servidor + url, peticion);
  }

}