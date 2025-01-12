import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _httpClient: HttpClient) {}

  getStudents(): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student'
    );
  }


  // Fliter the students based on Keywords
  filterStudents(word: string): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter=' +
        word
    );
  }

  //Sort the students based on columns & order
  sortStudents(column: string, order: string): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy=' +
        column +
        '&order=' +
        order
    );
  }


  //Pagination
  pageStudents(limit: number, page: number): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit=' +
        limit +
        '&page=' +
        page
    );
  }

  //Delete the student record
  delete(id: number): Observable<any> {
    return this._httpClient.delete(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student/' + id
    );
  }

  //Create the student record
  createStudent(data: any): Observable<any> {
    return this._httpClient.post(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student', data
    );
  }
}
