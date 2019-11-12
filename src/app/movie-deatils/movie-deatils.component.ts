import { Component, OnInit } from '@angular/core';
import { StateService } from '../sharedServices/state.service';

@Component({
  selector: 'app-movie-deatils',
  templateUrl: './movie-deatils.component.html',
  styleUrls: ['./movie-deatils.component.scss']
})
export class MovieDeatilsComponent implements OnInit {
  movieList:any;
  constructor(public state: StateService) { }

  ngOnInit() {
    this.movieList = this.state.movieObject;
    console.log("this.movieList", this.movieList)
  }

}
