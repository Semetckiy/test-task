import { Action } from '@ngrx/store';
import {CowFilter, CowItem, CowItems} from '../models/cow-models';

export enum CowActionTypes {
  GetCows            = '[COWS] get cows list',
  GetCowsSuccess     = '[COWS] get cows list - success',
  GetCowsError       = '[COWS] get cows list - error',
  DelCowById         = '[COWS] del cow by id',
  DelCowByIdSuccess  = '[COWS] del cow by id - success',
  DelCowByIdError    = '[COWS] del cow by id - error',
  UpdateCow          = '[COWS] update cow',
  UpdateCowSuccess   = '[COWS] update cow - success',
  UpdateCowError     = '[COWS] update cow - error',
  CreateCow          = '[COWS] create cow',
  CreateCowSuccess   = '[COWS] create cow - success',
  CreateCowError     = '[COWS] create cow - error'
}

export class GetCows implements Action {
  readonly type = CowActionTypes.GetCows;
  constructor(public payload: CowFilter) { }
}

export class GetCowsSuccess implements Action {
  readonly type = CowActionTypes.GetCowsSuccess;
  constructor(public payload: CowItems) { }
}

export class GetCowsError implements Action {
  readonly type = CowActionTypes.GetCowsError;
  constructor(public payload: any) { }
}

export class DelCowById implements Action {
  readonly type = CowActionTypes.DelCowById;
  constructor(public payload: number) { }
}

export class DelCowByIdSuccess implements Action {
  readonly type = CowActionTypes.DelCowByIdSuccess;
  constructor(public payload: CowItems) { }
}

export class DelCowByIdError implements Action {
  readonly type = CowActionTypes.DelCowByIdError;
  constructor(public payload: any) { }
}

export class UpdateCow implements Action {
  readonly type = CowActionTypes.UpdateCow;
  constructor(public payload: CowItem) { }
}

export class UpdateCowSuccess implements Action {
  readonly type = CowActionTypes.UpdateCowSuccess;
  constructor(public payload: CowItems) { }
}

export class UpdateCowError implements Action {
  readonly type = CowActionTypes.UpdateCowError;
  constructor(public payload: any) { }
}

export class CreateCow implements Action {
  readonly type = CowActionTypes.CreateCow;
  constructor(public payload: CowItem) { }
}

export class CreateCowSuccess implements Action {
  readonly type = CowActionTypes.CreateCowSuccess;
  constructor(public payload: CowItems) { }
}

export class CreateCowError implements Action {
  readonly type = CowActionTypes.CreateCowError;
  constructor(public payload: any) { }
}

export type CowActions = GetCows
  | GetCowsSuccess
  | GetCowsError
  | DelCowById
  | DelCowByIdSuccess
  | DelCowByIdError
  | UpdateCow
  | UpdateCowSuccess
  | UpdateCowError
  | CreateCow
  | CreateCowSuccess
  | CreateCowError;
