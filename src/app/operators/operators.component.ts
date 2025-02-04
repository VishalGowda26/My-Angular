import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { StudentService } from '../student.service';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent {
  constructor(
    private _vehicleService: VehicleService,
    private _StudentService: StudentService
  ) {}

  Vehicle = this._vehicleService.getVehicles();
  Student = this._StudentService.getStudents();

  ngOnInit() {
    forkJoin([this.Vehicle, this.Student])
      .pipe(
        map(([vehicle, student]) => {
          return {
            vehicles: vehicle,
            students: student,
          };
        })
      )
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
