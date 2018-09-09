import {Action} from "@ngrx/store";
export enum CoveragesActionTypes {
  GetCoverages = '[Coverages] Get Coverages',
  SetSelectedCoverages = '[Coverages] Set Selected Coverages',
  UpdateSelectedCoverages = '[Coverages] Update Selected Coverages',
}

export class GetCoverages implements Action {
  readonly type = CoveragesActionTypes.GetCoverages;
}

export class UpdateSelectedCoverages implements Action {
  readonly type = CoveragesActionTypes.UpdateSelectedCoverages;
  constructor(public payload: any){

  }
}

export class SetSelectedCoverages implements Action {
  readonly type = CoveragesActionTypes.SetSelectedCoverages;
  constructor(public payload: any){

  }
}

export type VehicleActions = GetCoverages | UpdateSelectedCoverages | SetSelectedCoverages;
