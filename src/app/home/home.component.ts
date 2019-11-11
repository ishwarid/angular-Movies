import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { MovieService } from './movie.service';
import { Router } from '@angular/router';

import { StateService } from '../sharedServices/state.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  search = new Subject<string>();
  movieList:any;
  searchStr:string;
  constructor(public movieService: MovieService, public router: Router, public state: StateService) { }

  ngOnInit() {
    console.log("here")
    this.search
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(name => {
        console.log(name);
        // adding search field in query filter object
        // Object.assign(this.searchStr, {  name });
        // console.log("********************", this.searchStr)
        this.getMovieDetails(name);
      });
    
    
  }
  onChangeSearch(name) {
    this.search.next(name);
  }

  getMovieDetails(name:string){
    this.movieService
      .getMovie(name)
      .subscribe(
        data => {
          console.log("*****************************")
          this.movieList = data;
          console.log(this.movieList )
        },
        err => {
         console.log("err", err)}
      );
  }
}
