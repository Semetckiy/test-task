import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { data } from '../mocks/mock-data';
import { CowItems } from '../models/cow-models';


@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {

  localData = data;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    switch (request.url) {

      case 'https://localhost/get-cows':
        const reqOffset = +request.params.get('offset');
        const reqLimit = +request.params.get('limit');
        const result: CowItems = {
          limit: reqLimit,
          offset: reqOffset,
          total: this.localData.result.length,
          result: this.localData.result.slice(reqOffset).slice(0, reqLimit)
        };
        return of(new HttpResponse({ status: 200, body: result }));


      case 'https://localhost/delete-cow':
        this.localData.result = this.localData.result.filter(item => item.cowId !== +request.params.get('id'));
        return of(new HttpResponse({ status: 200, body: true }));


      case 'https://localhost/update-cow':
        this.localData.result = this.localData.result.filter(item => {
          if (item.cowId === request.body.cowId) {
            return {
              healthIndex: +request.body.healthIndex,
              endDate: +request.body.endDate,
              minValueDateTime: +request.body.minValueDateTime,
              type: request.body.type.toString(),
              cowId: +request.body.cowId,
              animalId: request.body.animalId.toString(),
              eventId: +request.body.eventId,
              deletable: request.body.deletable,
              lactationNumber: +request.body.lactationNumber,
              daysInLactation: +request.body.daysInLactation,
              ageInDays: +request.body.ageInDays,
              startDateTime: +request.body.startDateTime,
              reportingDateTime: +request.body.reportingDateTime
            };
          } else {
            return item;
          }
        });

        return of(new HttpResponse({ status: 200, body: true }));

      case 'https://localhost/create-cow':
        this.localData.result.push({
          healthIndex: +request.body.healthIndex,
          endDate: +request.body.endDate,
          minValueDateTime: +request.body.minValueDateTime,
          type: request.body.type.toString(),
          cowId: +request.body.cowId,
          animalId: request.body.animalId.toString(),
          eventId: +request.body.eventId,
          deletable: request.body.deletable,
          lactationNumber: +request.body.lactationNumber,
          daysInLactation: +request.body.daysInLactation,
          ageInDays: +request.body.ageInDays,
          startDateTime: +request.body.startDateTime,
          reportingDateTime: +request.body.reportingDateTime
        });

        return of(new HttpResponse({status: 200, body: true}));

    }

    return next.handle(request);
  }

}
