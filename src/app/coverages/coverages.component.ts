import { Component, OnInit } from '@angular/core';
import {GetCoverages, SetSelectedCoverages, UpdateSelectedCoverages} from "./coverages.actions";
import {AppState} from "../reducers/index";
import {Store, select} from "@ngrx/store";
import {Observable} from "rxjs";
import {
  selectCoveragesState, selectCompDeductibleOptions, selectCollDeductibleOptions,
  selectRentalCarOptions, selectRoadsideOptions, selectVehicleState, selectSelectedCoveragesState
} from "../app.selectors";

import { combineLatest } from 'rxjs/observable/combineLatest';
import {take, map} from "rxjs/internal/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-coverages',
  templateUrl: 'coverages.component.html',
  styleUrls: ['coverages.component.css']
})
export class CoveragesComponent implements OnInit {

  public coverages$ : Observable<any>;
  public changedCoverages$ : Observable<any>;
  public selectedCoverages$ : Observable<any>;
  private vehicle$ : Observable<any>;
  public compDeductibleOptions$: Observable<any>;
  public colDeductibleOptions$: Observable<any>;
  public rentalCarOptions$: Observable<any>;
  public roadSideOptions$: Observable<any>;


  constructor(private store: Store<AppState>,
              private route: Router) { }

  ngOnInit() {
    this.dispatchGetCoverageAction();
    this.dispatchSetSelectedCoverages();
    this.setSelectors();
    this.watchForChanges();
  }

  private setSelectors(){
    this.coverages$ = this.store.pipe(
      select(selectCoveragesState)
    );

    this.selectedCoverages$ = this.store.pipe(
      select(selectSelectedCoveragesState)
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

  private dispatchSetSelectedCoverages(){
    this.vehicle$ = this.store.pipe(
      select(selectVehicleState),
      take(1)
    );
    this.vehicle$.subscribe(selectedCoverages => {
      this.store.dispatch(new SetSelectedCoverages(selectedCoverages));
    });
  }

  public updateSelectedCoverages(event: any, prop: string){
    const change: any = {};
    change[prop] = event.target.value;
    this.store.dispatch(new UpdateSelectedCoverages(change));
  }

  private watchForChanges(){
    this.changedCoverages$ = combineLatest(this.selectedCoverages$, this.vehicle$).pipe(
      map(arr=> {
        let selectedCoverage, vehicle;
        [selectedCoverage, vehicle] = arr;
        const diffObject: any = {};
        for(let prop in selectedCoverage){
          if(selectedCoverage[prop] !== vehicle[prop]){
            diffObject[prop] = selectedCoverage[prop];
          }else{
            diffObject[prop] = null;
          }
        }
        return diffObject;
      })
    );
  }

  public onSaveChangeClick(){
    this.route.navigate(['/vehicle']);
  }

  public onCancelChangesClick(){
    this.dispatchSetSelectedCoverages();
    this.route.navigate(['/vehicle']);
  }

}
