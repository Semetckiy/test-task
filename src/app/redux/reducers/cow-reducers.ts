import { CowActions, CowActionTypes } from '../actions/cow-actions';
import { CowItems } from '../models/cow-models';


export interface State {
  cows: CowItems;
  error: any;
  isLoading: boolean;
}

function getInitialState(): State {
  return {
    cows: {} as CowItems,
    error: null,
    isLoading: true
  };
}

export const initialState: State = getInitialState();

export function reducer(state = initialState, action: CowActions): State {

  switch (action.type) {

    case CowActionTypes.GetCows: {
      return getInitialState();
    }

    case CowActionTypes.GetCowsSuccess: {
      return {
        ...state,
        cows: action.payload,
        error: null,
        isLoading: false
      };
    }

    case CowActionTypes.GetCowsError: {
      return {
        ...state,
        cows: {} as CowItems,
        error: action.payload,
        isLoading: false
      };
    }

    case CowActionTypes.DelCowByIdSuccess: {
      return {
        ...state,
        cows: action.payload,
        error: null,
        isLoading: false
      };
    }

    case CowActionTypes.DelCowByIdError: {
      return {
        ...state,
        cows: {} as CowItems,
        error: action.payload,
        isLoading: false
      };
    }

    case CowActionTypes.UpdateCowSuccess: {
      return {
        ...state,
        cows: action.payload,
        error: null,
        isLoading: false
      };
    }

    case CowActionTypes.UpdateCowError: {
      return {
        ...state,
        cows: {} as CowItems,
        error: action.payload,
        isLoading: false
      };
    }

    case CowActionTypes.CreateCowSuccess: {
      return {
        ...state,
        cows: action.payload,
        error: null,
        isLoading: false
      };
    }

    case CowActionTypes.CreateCowError: {
      return {
        ...state,
        cows: {} as CowItems,
        error: action.payload,
        isLoading: false
      };
    }

    default:
      return state;
  }
}
