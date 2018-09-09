import {Action} from "@ngrx/store";
export enum VehicleActionTypes {
  GetVehicle = '[Vehicle] Get Vehicle',
}

export class GetVehicle implements Action {
  readonly type = VehicleActionTypes.GetVehicle;
}

export type VehicleActions = GetVehicle
