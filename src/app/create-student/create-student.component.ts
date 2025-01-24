import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent {
  id: number = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _studentService: StudentService,
    private _router: Router
  ) {
    // * Using ActivatedRoutes capturing the id from URL params
    _activatedRoute.params.subscribe((data: any) => {
      console.log(data.id);
      this.id = data.id;
      // * Integrating API
      _studentService.getStudent(data.id).subscribe((data: any) => {
        console.log(data);
        //* Display the data in the form
        this.studentForm.patchValue(data);
      });
    });
  }

  studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    dob: new FormControl(),
    profile_picture: new FormControl(),
    email: new FormControl(),
    school_logo: new FormControl(),
    school_name: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl(),
  });

  submit() {
    if (this.id) {
      this._studentService
        .updateStudent(this.id, this.studentForm.value)
        .subscribe(
          (data: any) => {
            alert('Updated Successfully');
            this._router.navigateByUrl('/dashboard/students');
          },
          (err: any) => {
            alert('Internal Server Error');
          }
        );
    } else {
      this._studentService.createStudent(this.studentForm.value).subscribe(
        (data: any) => {
          alert('Student Record Successfully added');
          this._router.navigateByUrl('/dashboard/students');
        },
        (err: any) => {
          alert('Internal Server Error');
        }
      );
    }
  }
}
