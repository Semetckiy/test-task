import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'timestampToDate' })

export class TimestampToDatePipe implements PipeTransform {

  transform(value: any, format?: string): string {

    if (value) {
      return moment(value, 'X').format(format ? format : 'DD.MM.YYYY');
    } else {
      return '';
    }

  }

}
