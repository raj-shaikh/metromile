import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from "@ngrx/store";
import {AppState} from "./reducers/index";
import {GetVehicle, VehicleActionTypes} from "./vehicle/vehicle.actions";
import {map} from "rxjs/internal/operators";

@Injectable()
export class AppEffects {

  // @Effect({dispatch: false})
  // $getVehicle = this.actions$.pipe(
  //   ofType<GetVehicle>(VehicleActionTypes.GetVehicle),
  //   map(action => {
  //
  //   })
  // );

  constructor(private actions$: Actions,
              private store:Store<AppState>) {

  }
}
