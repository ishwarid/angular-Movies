import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {

  
  constructor(private httpClient: HttpClient) { }
  options = {
    headers: {
    }
  };
  getMovie( moviename: string ): Observable<any> {
    return this.httpClient.get<any>("http://www.omdbapi.com/?apikey=74a0584d&t="+moviename,
    {
      headers: this.options.headers,
    }
    );
  }
}
