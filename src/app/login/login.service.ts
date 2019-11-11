import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface User {
  id: number;
  name: string;
  language: string;
  phone_number: string;
  photo: string;
}
@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  options = {
    headers: {
    }
  };
  login( username: string, password: string ): Observable<User> {
    return this.httpClient.get<User>("https://jsonplaceholder.typicode.com/users?username="+username,
    {
      headers: this.options.headers,
    }
    );
  }
}
