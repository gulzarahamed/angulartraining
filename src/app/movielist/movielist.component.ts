import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movies:any[];

  constructor(private movielistservice: MovielistService,
    private pubsubService: PubsubService) { }

  ngOnInit() {
    this.movies= this.movielistservice.getMovies().subscribe((result)=>{
      this.movies=result;
    });
  }

  sendMessage(name:string){
    alert(JSON.stringify(name))
    this.pubsubService.getPublisher().next("here my published message...")
  }

}
