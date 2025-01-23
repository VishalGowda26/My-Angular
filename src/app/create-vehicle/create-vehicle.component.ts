import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css'],
})

// Importing Router for navigating to url
export class CreateVehicleComponent {
  id: number = 0;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _vehicleService: VehicleService,
    private _router: Router
  ) {
    // * Capturing id with ActivatedRoute
    _activatedRoute.params.subscribe((data: any) => {
      console.log(data.id);
      this.id = data.id;
      // * Integrating API
      _vehicleService.getVehicle(data.id).subscribe((data: any) => {
        console.log(data);
        //* Display the existing data into the form
        this.vehicleForm.patchValue(data);
      });
    });
  }

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

  submit() {
    if (this.id) {
      this._vehicleService
        .updateVehicle(this.id, this.vehicleForm.value)
        .subscribe(
          (data: any) => {
            alert('Updated Successfully');
            /* Navigating to particular url in two possible ways */
            // this._router.navigate(['/dashboard/vehicle']);
            this._router.navigateByUrl('/dashboard/vehicle');
          },
          (err: any) => {
            alert('Internal Server Error');
          }
        );
    } else {
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
}
