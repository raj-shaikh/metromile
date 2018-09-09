import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store, select} from "@ngrx/store";
import {AppState} from "../reducers/index";
import {selectVehicleState} from "../app.selectors";
import {GetVehicle} from "./vehicle.actions";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public vehicle$: Observable<any>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.dispatchGetVehicleAction();
    this.setSelectors();
  }

  private setSelectors(){
    this.vehicle$ = this.store.pipe(
      select(selectVehicleState)
    )
  }

  private dispatchGetVehicleAction(){
    this.store.dispatch(new GetVehicle());
  }

}
