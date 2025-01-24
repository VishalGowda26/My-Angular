import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  student: any = [];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _studentService: StudentService
  ) {
    // Using ActivatedRoutes to get the id from URL by params
    _activatedRoute.params.subscribe((data: any) => {
      console.log(data.id);

      // Passing the data to getStudent() & fetching particular record by (data.id) & storing it in students
      _studentService.getStudent(data.id).subscribe((data: any) => {
        this.student = data;
      });
    });
  }
}
