import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BackendService } from '../services/backend.service';
import { CowItems } from '../../../../shared/models/cow-models';
import {
  CowActionTypes,
  GetCows,
  GetCowsSuccess,
  DelCowById,
  DelCowByIdSuccess,
  UpdateCow,
  UpdateCowSuccess,
  CreateCow,
  CreateCowSuccess,
  CowError,
} from '../actions/cow-actions';
import { State } from '../reducers';

@Injectable()
export class CowEffects {

  private defaultFilter = {limit: 5, offset: 0};

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<State>,
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
          return of(new CowError(error));
        })
      )
    )
  );

  @Effect() delCowById$ = this.actions$.pipe(
    ofType(CowActionTypes.DelCowById),
    switchMap((action: DelCowById) =>
      this.backendService.delCowById(action.payload).pipe(
        map(() => new DelCowByIdSuccess()),
        catchError(error => {
          return of(new CowError(error));
        })
      )
    )
  );

  @Effect() delCowByIdSuccess$ = this.actions$.pipe(
    ofType(CowActionTypes.DelCowByIdSuccess),
    map(() => new GetCows(this.defaultFilter))
  );

  @Effect() updateCow$ = this.actions$.pipe(
    ofType(CowActionTypes.UpdateCow),
    switchMap((action: UpdateCow) =>
      this.backendService.updateCow(action.payload).pipe(
        map(() => new UpdateCowSuccess()),
        catchError(error => {
          return of(new CowError(error));
        })
      )
    )
  );

  @Effect() updateCowSuccess$ = this.actions$.pipe(
    ofType(CowActionTypes.UpdateCowSuccess),
    map(() => new GetCows(this.defaultFilter))
  );

  @Effect() createCow$ = this.actions$.pipe(
    ofType(CowActionTypes.CreateCow),
    switchMap((action: CreateCow) =>
      this.backendService.createCow(action.payload).pipe(
        map(() => new CreateCowSuccess()),
        catchError(error => {
          return of(new CowError(error));
        })
      )
    )
  );

  @Effect() createCowSuccess$ = this.actions$.pipe(
    ofType(CowActionTypes.CreateCowSuccess),
    map(() => new GetCows(this.defaultFilter))
  );

}
