import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { StateService } from './sharedServices/state.service';
import { fadeAnimation } from './sharedServices/animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeAnimation ]
})
export class AppComponent implements OnInit{
  userDetails: any;
  userLogout: boolean;
  title = 'movies dasboard';
  isLoggedIn: Boolean = true;
 
  constructor (
    public stateService: StateService,
    public router: Router,
  ) { }
  ngOnInit (
  
  ) {
    console.log( "====================", this.stateService.data )
    this.isLoggedIn = !!JSON.parse( localStorage.getItem( 'Data' ) );
  }

  logout () {
    this.stateService.logout();
  }
}
