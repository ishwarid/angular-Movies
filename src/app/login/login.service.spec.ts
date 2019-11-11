import { TestBed } from '@angular/core/testing';

import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";


import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
