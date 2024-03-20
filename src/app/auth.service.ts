import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn:boolean=false;
  private  redirectUrl!:string;
  constructor() { }

  login(){

  }
  logOut(){

  }
}
