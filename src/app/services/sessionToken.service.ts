import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ActiveUserData } from '../models/activeUser';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SessionTokenService {
  private URL = "https://cosmoknotserver.herokuapp.com/user/login";
 
  public sessionToken : string

  constructor(
    private http : HttpClient
    ) { }

  getToken(sessionToken) {
    console.log(sessionToken)
    return this.http.post(this.URL, this.sessionToken, httpOptions)
  
  }
}
