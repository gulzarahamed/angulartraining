import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventspage',
  templateUrl: './eventspage.component.html',
  styleUrls: ['./eventspage.component.css']
})
export class EventspageComponent implements OnInit {

  maxRows=10;
  headers=[];
  data=[];
  constructor() { 

  }

  ngOnInit() {
    this.headers=['id','name','email'];
    this.data=[
      {id:1,name:'gulzar',email:'gulzar@email.com'},
      {id:2,name:'hisham',email:'hisham@email.com'},
      {id:3,name:'nazar',email:'nazar@email.com'},
    ]
  }

}
