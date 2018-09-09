import {VehicleActionTypes} from "./vehicle.actions";
import vehicle from '../../data-source/vehicle';


/**
 * Created by raj10637 on 9/9/2018.
 */
export function vehicleReducer(state: any, action): any {
  switch (action.type) {
    case VehicleActionTypes.GetVehicle :
      return vehicle;
    default :
      return state;
  }
}
