import {createFeatureSelector, createSelector} from "@ngrx/store";
/**
 * Created by raj10637 on 9/9/2018.
 */

export const vehilceState = createFeatureSelector<any>('vehicle');

export const selectVehicleState = createSelector (
  vehilceState,
  vehicle => vehicle
);
