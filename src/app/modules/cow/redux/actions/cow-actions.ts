import { Action } from '@ngrx/store';
import { CowFilter, CowItem, CowItems } from '../../../../shared/models/cow-models';

export enum CowActionTypes {
  GetCows            = '[COWS] get cows list',
  GetCowsSuccess     = '[COWS] get cows list - success',
  DelCowById         = '[COWS] del cow by id',
  DelCowByIdSuccess  = '[COWS] del cow by id - success',
  UpdateCow          = '[COWS] update cow',
  UpdateCowSuccess   = '[COWS] update cow - success',
  CreateCow          = '[COWS] create cow',
  CreateCowSuccess   = '[COWS] create cow - success',
  CowError           = '[COWS] cow - error'
}

export class GetCows implements Action {
  readonly type = CowActionTypes.GetCows;
  constructor(public payload: CowFilter) { }
}

export class GetCowsSuccess implements Action {
  readonly type = CowActionTypes.GetCowsSuccess;
  constructor(public payload: CowItems) { }
}

export class DelCowById implements Action {
  readonly type = CowActionTypes.DelCowById;
  constructor(public payload: number) { }
}

export class DelCowByIdSuccess implements Action {
  readonly type = CowActionTypes.DelCowByIdSuccess;
  constructor() { }
}

export class UpdateCow implements Action {
  readonly type = CowActionTypes.UpdateCow;
  constructor(public payload: CowItem) { }
}

export class UpdateCowSuccess implements Action {
  readonly type = CowActionTypes.UpdateCowSuccess;
  constructor() { }
}

export class CreateCow implements Action {
  readonly type = CowActionTypes.CreateCow;
  constructor(public payload: CowItem) { }
}

export class CreateCowSuccess implements Action {
  readonly type = CowActionTypes.CreateCowSuccess;
  constructor() { }
}

export class CowError implements Action {
  readonly type = CowActionTypes.CowError;
  constructor(public payload: any) { }
}

export type CowActions = GetCows
  | GetCowsSuccess
  | DelCowById
  | DelCowByIdSuccess
  | UpdateCow
  | UpdateCowSuccess
  | CreateCow
  | CreateCowSuccess
  | CowError;
