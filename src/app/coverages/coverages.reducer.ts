import coverages from '../../data-source/coverages';
import {CoveragesActionTypes} from "./coverages.actions";

/**
 * Created by raj10637 on 9/9/2018.
 */
export function coveragesReducer(state: any, action): any {
  switch (action.type) {
    case CoveragesActionTypes.GetCoverages :
      return coverages;
    default :
      return state;
  }
}


export function selectedCoverageReducer(state: any, action): any {
  switch (action.type) {
    case CoveragesActionTypes.SetSelectedCoverages :
      return action.payload;
    case CoveragesActionTypes.UpdateSelectedCoverages :
      return {...state, ...action.payload};
    default :
      return state;
  }
}
