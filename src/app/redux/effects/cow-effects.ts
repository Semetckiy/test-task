import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BackendService } from '../services/backend.service';
import { CowItems } from '../models/cow-models';
import {
  CowActionTypes,
  GetCows,
  GetCowsSuccess,
  GetCowsError,
  DelCowById,
  DelCowByIdSuccess,
  DelCowByIdError,
  UpdateCow,
  UpdateCowSuccess,
  UpdateCowError,
  CreateCowSuccess,
  CreateCowError
} from '../actions/cow-actions';

@Injectable()
export class CowEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<any>,
    private readonly backendService: BackendService
  ) {}

  @Effect() getCows$ = this.actions$.pipe(
    ofType(CowActionTypes.GetCows),
    switchMap((action: GetCows) =>
      this.backendService.getCows(action.payload).pipe(
        map((cows: CowItems) => {
          return new GetCowsSuccess(cows);
        }),
        catchError(error => {
          return of(new GetCowsError(error));
        })
      )
    )
  );

  @Effect() delCowById$ = this.actions$.pipe(
    ofType(CowActionTypes.DelCowById),
    switchMap((action: DelCowById) =>
      this.backendService.delCowById(action.payload).pipe(
        map((cows: CowItems) => {
          return new DelCowByIdSuccess(cows);
        }),
        catchError(error => {
          return of(new DelCowByIdError(error));
        })
      )
    )
  );

  @Effect() updateCow$ = this.actions$.pipe(
    ofType(CowActionTypes.UpdateCow),
    switchMap((action: UpdateCow) =>
      this.backendService.updateCow(action.payload).pipe(
        map((cows: CowItems) => {
          return new UpdateCowSuccess(cows);
        }),
        catchError(error => {
          return of(new UpdateCowError(error));
        })
      )
    )
  );

  @Effect() createCow$ = this.actions$.pipe(
    ofType(CowActionTypes.CreateCow),
    switchMap((action: UpdateCow) =>
      this.backendService.createCow(action.payload).pipe(
        map((cows: CowItems) => {
          return new CreateCowSuccess(cows);
        }),
        catchError(error => {
          return of(new CreateCowError(error));
        })
      )
    )
  );

}
