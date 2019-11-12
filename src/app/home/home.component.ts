import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { MovieService } from './movie.service';
import { Router } from '@angular/router';

import { StateService } from '../sharedServices/state.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  search = new Subject<string>();
  movieList=[];
  searchStr:string;
  movieError:boolean= false;
  displayCard = false;
  myControl = new FormControl();
  options=[];
  constructor(public movieService: MovieService, public router: Router, public state: StateService) { 
    this.options.push(JSON.parse(localStorage.getItem("pastSearch")));
  }

  ngOnInit() {
    console.log("here")
    this.options.push(JSON.parse(localStorage.getItem("pastSearch")));
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
    localStorage.setItem("pastSearch", JSON.stringify(name));
   
  }

  getMovieDetails(name:string){
    this.movieService
      .getMovie(name)
      .subscribe(
        data => {
          console.log("*****************************")
          this.displayCard = true
          this.movieList = data;
          
          console.log(this.movieList )
          if (data.Error){
            console.log("inse")
            this.movieError = true;

          }
          
        },
        err => {
         console.log("err", err)}
      );
  }

  handleClick(event, movieList){
    console.log("movieList",)
    this.state.movieObject = movieList;
    this.router.navigate(["details"]);
  }
}
