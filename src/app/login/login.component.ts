import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from './login.service';
import { StateService } from '../sharedServices/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = null;
  form = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("")
  });
  constructor(public loginService: LoginService, public router: Router, public state: StateService) { }

  ngOnInit() {
    console.log("here")
  }

  submitForm() {
    console.log("Logging in");
    this.loginService
      .login(this.form.value.username, this.form.value.password)
      .subscribe(
        data => {
          console.log("*****************************", data)
          
          this.state.setData( data );
          this.router.navigate([""]);
        },
        err => {
          this.error = "Failed to login, Username dosen't macthes";
        }
      );
  }


}
