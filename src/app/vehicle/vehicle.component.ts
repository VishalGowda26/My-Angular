import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent {
  vehicles: any = [];
  term: string = '';
  constructor(private _vehicleService: VehicleService) {
    _vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
        // console.log(this.vehicles);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  filter() {
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
        console.log(this.vehicles);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  column: string = '';
  order: string = '';

  sort() {
    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }
}
