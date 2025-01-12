import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  constructor(private _studentService: StudentService) {
    this.loadStudents();
  }

  students: any = [];
  loadStudents() {
    this._studentService.getStudents().subscribe(
      (data: any) => {
        this.students = data;
        console.log(this.students);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  // Fliter the students based on Keywords
  word: string = '';
  filter() {
    this._studentService.filterStudents(this.word).subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  //Sort the students based on columns & order
  column: string = '';
  order: string = '';

  sort() {
    this._studentService.sortStudents(this.column, this.order).subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  //Pagination
  limit: number = 0;
  page: number = 0;

  pagination() {
    this._studentService.pageStudents(this.limit, this.page).subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  //Delete the student record
  delete(id: number) {
    if (confirm('Are you sure to delete?') == true) {
      this._studentService.delete(id).subscribe(
        (data: any) => {
          alert('Record Successfully Deleted');
          this.loadStudents();
        },
        (err: any) => {
          alert('Internal Server Error');
        }
      );
    } else {
      alert('You have Cancelled');
    }
  }
}
