import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { data } from './mocks/mock-data';
import { CowItems } from '../models/cow-models';

const urls = [
  {
    url: 'https://localhost/cows',
  },
  {
    url: 'https://localhost/cows-delete'
  }
];

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    switch (request.url) {

      case 'https://localhost/cows':
        const reqOffset = +request.params.get('offset');
        const reqLimit = +request.params.get('limit');
        const result: CowItems = {
          limit: reqLimit,
          offset: reqOffset,
          total: data.total,
          result: data.result.slice(reqOffset).slice(0, reqLimit)
        };
        return of(new HttpResponse({status: 200, body: result}));

      case 'https://localhost/cows-delete':

        const findCow = data.result.find(cow => cow.cowId === request.body) || false;

        if (findCow) {
          const delResult: CowItems = {
            limit: 0,
            offset: 5,
            total: data.total,
            result: data.result.filter(item => item.cowId !== request.body).slice(0).slice(0, 5)
          };
          return of(new HttpResponse({status: 200, body: delResult}));
        } else {
          return of(new HttpResponse({status: 404, body: 'some error'}));
        }

      case 'https://localhost/cows-update':

        // return updated data
        const updatedResult: CowItems = {
          limit: 0,
          offset: 5,
          total: data.total,
          result: data.result.slice(0).slice(0, 5)
        };
        return of(new HttpResponse({status: 200, body: updatedResult}));

      case 'https://localhost/cows-create':

        // return data with new item
        const createdResult: CowItems = {
          limit: 0,
          offset: 5,
          total: data.total,
          result: data.result.slice(0).slice(0, 5)
        };
        return of(new HttpResponse({status: 200, body: createdResult}));

    }

    return next.handle(request);
  }

}
