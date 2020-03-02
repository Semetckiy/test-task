import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CowItem, CowItems } from '../../../../shared/models/cow-models';


@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(
    public http: HttpClient
  ) { }

  getCows(filter): Observable<CowItems> {
    return this.http.get<CowItems>('https://localhost/get-cows', {
      params: filter
    });
  }

  delCowById(id: number): Observable<boolean> {
    return this.http.delete<boolean>('https://localhost/delete-cow', {
      params: { id: id.toString() }
    });
  }

  updateCow(cow: CowItem): Observable<boolean> {
    return this.http.put<boolean>('https://localhost/update-cow', cow);
  }

  createCow(cow: CowItem): Observable<boolean> {
    return this.http.post<boolean>('https://localhost/create-cow', cow);
  }

}
