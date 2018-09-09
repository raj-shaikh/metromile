import {createFeatureSelector, createSelector} from "@ngrx/store";
/**
 * Created by raj10637 on 9/9/2018.
 */

export const vehilceState = createFeatureSelector<any>('vehicle');
export const selectedCoverageState = createFeatureSelector<any>('selectedCoverages');
export const coverageState = createFeatureSelector<any>('coverages');

export const selectVehicleState = createSelector (
  vehilceState,
  vehicle => vehicle
);

export const selectCoveragesState = createSelector (
  coverageState,
  coverage => coverage
);

export const selectSelectedCoveragesState = createSelector (
  selectedCoverageState,
  coverage => coverage
);

export const selectCompDeductibleOptions = createSelector(
  coverageState,
  coverage => coverage.coverageOptions.filter(item => item.name === 'compDeductible')[0].options
);


export const selectCollDeductibleOptions = createSelector(
  coverageState,
  coverage => coverage.coverageOptions.filter(item => item.name === 'collDeductible')[0].options
);


export const selectRentalCarOptions = createSelector(
  coverageState,
  coverage => coverage.coverageOptions.filter(item => item.name === 'rentalCar')[0].options
);


export const selectRoadsideOptions = createSelector(
  coverageState,
  coverage => coverage.coverageOptions.filter(item => item.name === 'roadside')[0].options
);
