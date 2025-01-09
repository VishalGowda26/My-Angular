import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private _httpClient: HttpClient) {}

  profiles(): Observable<any> {
    return this._httpClient.get('https://dummyapi.online/api/social-profiles');
  }
}
