import {Action} from "@ngrx/store";
export enum CoveragesActionTypes {
  GetCoverages = '[Edit-Coverages] Get Coverages',
}

export class GetCoverages implements Action {
  readonly type = CoveragesActionTypes.GetCoverages;
}

export type VehicleActions = GetCoverages
