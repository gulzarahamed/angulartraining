import { Component, OnInit } from '@angular/core';
import { PubsubService } from '../pubsub.service';
import { LoginserviceService } from '../loginservice.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedin= false;
  constructor(private pubsub:PubsubService,private loginservice:LoginserviceService,private router : Router) { }

  ngOnInit() {
    this.loggedin= this.loginservice.isLoggedIn();
    this.pubsub.getLoginSubscriber().subscribe((event) =>{
      this.loggedin= this.loginservice.isLoggedIn();

    })
  }

  logout(){
    this.loggedin=false;
    this.loginservice.doLogout();
    this.router.navigate(['/home']);
  }
}
