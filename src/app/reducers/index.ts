import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {storeFreeze} from 'ngrx-store-freeze';
import {vehicleReducer} from "../vehicle/vehicle.reducer";
import {coveragesReducer, selectedCoverageReducer} from "../coverages/coverages.reducer";
/**
 * Created by raj10637 on 9/9/2018.
 */


export interface AppState{
  vehicle : any,
  coverages: any,
  selectedCoverages: any;
}

export const reducers: ActionReducerMap<AppState> = {
  vehicle : vehicleReducer,
  coverages : coveragesReducer,
  selectedCoverages : selectedCoverageReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];

