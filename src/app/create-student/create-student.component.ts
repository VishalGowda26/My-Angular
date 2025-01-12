import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent {
  constructor(
    private _studentService: StudentService,
    private _router: Router
  ) {}

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

  create() {
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
