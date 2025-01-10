import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private _httpClient: HttpClient) {}

  fetchAccounts(): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/principals'
    );
  }
  getFilteredAccounts(word: string): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter=' + word
    );
  }
  getSortedAccounts(column: string, order: string): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy=' + column + '&order=' + order
    );
  }
  getPaginatedAccounts(page: number, limit: number): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=' + limit + '&page=' + page
    );
  }
  deleteAccount(id: number): Observable<any> {
    return this._httpClient.delete(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/principals/' + id
    );
  }
}
