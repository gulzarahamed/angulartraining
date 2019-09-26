import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {


  @Input()
  maxRows: number;

  @Input()
  data:any;

  @Input()
  headers:any;

  constructor() { }

  ngOnInit() {
    
  }

}
