import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }

  doLogin( username:string,password:string){

    if (username=="aaa" && password=="aaa"){
      sessionStorage.setItem("isloggedin","true");
      return true;
    }
    else{
      return false;
    }

  }

  doLogout(){
    sessionStorage.clear();
  }

  isLoggedIn(){
      return (sessionStorage.getItem("isloggedin")=="true") ? true:false;
  }

}
