import { Component, OnInit } from '@angular/core';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  event;

  constructor(private pubsubservice: PubsubService) { }

  ngOnInit() {
    this.pubsubservice.getSubscriber().subscribe((event)=>{
      this.event=event;
      console.log(this.event);
    })
  }

}
