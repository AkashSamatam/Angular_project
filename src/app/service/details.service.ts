import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from '../models/details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) { }

  baseURL="http://localhost:8080/api/v1/details";

  public userdetails(details:Details):Observable<any>{
    return this.http.post(`${this.baseURL}`,details);
  }
}
