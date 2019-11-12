import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './sharedServices/auth-guard-service.service';
import { MovieDeatilsComponent } from './movie-deatils/movie-deatils.component';
const routes: Routes = [

  { path: "login", component: LoginComponent },
  { path: "", component: HomeComponent, canActivate: [ AuthGuardService ] },
  { path: "details", component: MovieDeatilsComponent, canActivate: [ AuthGuardService ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
