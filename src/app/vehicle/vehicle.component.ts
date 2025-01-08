import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent {
  vehicles: any = [];
  constructor(private _vehicleService: VehicleService) {
    _vehicleService.getVehicles().subscribe((data: any) => {
      this.vehicles = data;
      console.log(this.vehicles);
    });
  }
}
