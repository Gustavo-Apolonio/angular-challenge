import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Mock from '../@types/mock';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ListService {
  constructor(private http: HttpClient) {}

  private listUrl = 'assets/mock.json';

  get() {
    return this.http.get<Array<Mock>>(this.listUrl);
  }
}
