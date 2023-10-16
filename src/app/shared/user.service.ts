import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:3000/books";
  public logueado: boolean;
  public user: User;

  constructor(private http: HttpClient) {

    this.logueado = false;
    
  }
  register(user:User){

    return this.http.post(this.url + "/register", user);
  }

  login(user:User){

    return this.http.post(this.url + "/login", user);
  }
}
