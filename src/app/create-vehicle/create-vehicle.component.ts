import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css'],
})

// Importing Router for navigating to url
export class CreateVehicleComponent {
  constructor(
    private _vehicleService: VehicleService,
    private _router: Router
  ) {}

  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),
  });

  create() {
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data: any) => {
        alert('Vehicle Created Successfully');
        /* Navigating to particular url in two possible ways */
        // this._router.navigate(['/dashboard/vehicle']);
        this._router.navigateByUrl('/dashboard/vehicle');
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }
}
