import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  options = {
    headers: {
    }
  };
  login( username: string, password: string ): Observable<any> {
    return this.httpClient.get<any>("https://jsonplaceholder.typicode.com/users?username="+username,
    {
      headers: this.options.headers,
    }
    );
  }
}
