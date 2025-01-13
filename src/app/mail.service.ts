import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private _httpClient: HttpClient) {}

  getMessage(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }

  // getMails based on Id
  getMessageById(id: number): Observable<any> {
    return this._httpClient.get(
      'https://jsonplaceholder.typicode.com/todos?userId=' + id
    );
  }

  // filter the mails (read or unread)
  filterMessages(completed: boolean, id: number): Observable<any> {
    return this._httpClient.get(
      'https://jsonplaceholder.typicode.com/todos?completed=' +
        completed +
        '&userId=' +
        id
    );
  }
}
