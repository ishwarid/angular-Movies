import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { CustomMaterialModule } from '../material.models';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuardService } from './sharedServices/auth-guard-service.service';
import { StateService } from './sharedServices/state.service';
import { LoginService } from './login/login.service';
import { MovieDeatilsComponent } from './movie-deatils/movie-deatils.component';
import { MovieService } from './home/movie.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MovieDeatilsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomMaterialModule,
   
  ],
  providers: [
    AuthGuardService,
    StateService,
    LoginService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
