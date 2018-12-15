import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActiveUserData } from '../models/activeUser';

const httpOptions = {
  headers : new Headers({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AdminTokenService {
  public adminToken : string;
  private URL = 'https"//cosmoknotserver.herokuapp.com/user';

  constructor(
    private http : HttpClient,
  ) { }

  getToken(){

  }
}
