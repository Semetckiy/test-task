import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {CowItem, CowItems} from '../models/cow-models';


@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(
    public http: HttpClient
  ) { }

  getCows(filter): Observable<CowItems> {
    return this.http.get<CowItems>('https://localhost/cows', {
      params: filter
    });
  }

  delCowById(id: number): Observable<CowItems> {
    return this.http.post<CowItems>('https://localhost/cows-delete', id);
  }

  updateCow(cow: CowItem): Observable<CowItems> {
    return this.http.post<CowItems>('https://localhost/cows-update', cow);
  }

  createCow(cow: CowItem): Observable<CowItems> {
    return this.http.post<CowItems>('https://localhost/cows-create', cow);
  }

}
