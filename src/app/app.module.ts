import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { VehicleComponent } from './vehicle/vehicle.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {environment} from "../environments/environment";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {reducers, metaReducers} from "./reducers";
import {AppEffects} from "./app.effects";
import { EditCoveragesComponent } from './edit-coverages/edit-coverages.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    EditCoveragesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({stateKey : 'router'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
