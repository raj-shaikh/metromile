import { Component, OnInit } from '@angular/core';
import {GetCoverages} from "./coverages.actions";
import {AppState} from "../reducers/index";
import {Store, select} from "@ngrx/store";
import {Observable} from "rxjs";
import {
  selectCoveragesState, selectCompDeductibleOptions, selectCollDeductibleOptions,
  selectRentalCarOptions, selectRoadsideOptions
} from "../app.selectors";

@Component({
  selector: 'app-edit-coverages',
  templateUrl: 'coverages.component.html',
  styleUrls: ['coverages.component.css']
})
export class CoveragesComponent implements OnInit {

  public coverages$ : Observable<any>;
  public compDeductibleOptions$: Observable<any>;
  public colDeductibleOptions$: Observable<any>;
  public rentalCarOptions$: Observable<any>;
  public roadSideOptions$: Observable<any>;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.dispatchGetCoverageAction();
    this.setSelectors();
  }

  private setSelectors(){
    this.coverages$ = this.store.pipe(
      select(selectCoveragesState)
    );

    this.compDeductibleOptions$ = this.store.pipe(
      select(selectCompDeductibleOptions)
    );

    this.colDeductibleOptions$ = this.store.pipe(
      select(selectCollDeductibleOptions)
    );

    this.rentalCarOptions$ = this.store.pipe(
      select(selectRentalCarOptions)
    );

    this.roadSideOptions$ = this.store.pipe(
      select(selectRoadsideOptions)
    );
  }

  private dispatchGetCoverageAction(){
    this.store.dispatch(new GetCoverages());
  }

}
