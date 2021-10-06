import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


const baseUrl = 'https://randomuser.me/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Get dei profili
  public get(){
    return this.http.get(baseUrl, {observe: 'response'})
  }
 
}
