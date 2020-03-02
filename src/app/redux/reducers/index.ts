import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCows from './cow-reducers';

export interface State {
  data: fromCows.State;
}

export const reducers: ActionReducerMap<State> = {
  data: fromCows.reducer
};

export const cows = createFeatureSelector<any, State>('cows');

export const getCowsState = createSelector(cows, (state: State) => {
  return state.data;
});
