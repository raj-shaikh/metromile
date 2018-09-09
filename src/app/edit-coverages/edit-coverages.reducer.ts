import coverages from '../../data-source/coverages';
import {CoveragesActionTypes} from "./edit-coverages.actions";

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
