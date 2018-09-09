import { Component, OnInit } from '@angular/core';
import {GetCoverages} from "./edit-coverages.actions";
import {AppState} from "../reducers/index";
import {Store, select} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectCoveragesState} from "../app.selectors";

@Component({
  selector: 'app-edit-coverages',
  templateUrl: './edit-coverages.component.html',
  styleUrls: ['./edit-coverages.component.css']
})
export class EditCoveragesComponent implements OnInit {

  public coverages$ : Observable<any>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.dispatchGetCoverageAction();
    this.setSelectors();
  }

  private setSelectors(){
    this.coverages$ = this.store.pipe(
      select(selectCoveragesState)
    )
  }

  private dispatchGetCoverageAction(){
    this.store.dispatch(new GetCoverages());
  }

}
