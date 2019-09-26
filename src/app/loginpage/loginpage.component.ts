import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import {Router} from '@angular/router';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  username:string;
  password:string;
  message:string;

  constructor( private loginservice:LoginserviceService,
    private route: Router,
    private pubsub :PubsubService) { }

  ngOnInit() {
  }

  login(){
    console.log("username: " + this.username + ",password: " + this.password);
    if (this.loginservice.doLogin(this.username,this.password)){
      this.route.navigate(['/home']);
      this.pubsub.getLoginPublisher().next(this.username);
    } 
    else{
      this.message="invalid credential...";
    }
  }

}
