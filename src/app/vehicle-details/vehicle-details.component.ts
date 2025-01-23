import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent {
  vehicle: any = [];
  constructor(
    private _vehicleService: VehicleService,
    private _activatedRoute: ActivatedRoute
  ) {
    // * Using ActivatedRoute to access to information about the route using query parms(in url)
    _activatedRoute.params.subscribe((data: any) => {
      console.log(data.id);

      // * Fetching data from service to get the particular id data
      _vehicleService.getVehicle(data.id).subscribe((data: any) => {
        this.vehicle = data;
        console.log(data);
      });
    });
  }
}
