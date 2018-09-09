/**
 * Created by raj10637 on 9/9/2018.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {VehicleComponent} from "./vehicle/vehicle.component";
import {CoveragesComponent} from "./coverages/coverages.component";

const appRoutes: Routes = [
  {
    path: 'vehicle',
    component: VehicleComponent
  },
  {
    path: 'edit-coverage',
    component: CoveragesComponent
    //loadChildren: './coverages/coverages.module#EditCoveragesModule'
  },
  {
    path: '**',
    redirectTo: '/vehicle'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing : true}
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [  ]
})

export class AppRoutingModule {

}

