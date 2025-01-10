import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent {
  accounts: any = [];

  constructor(private _accountService: AccountsService) {
    this.pageLoad();
  }

  pageLoad() {
    this._accountService.fetchAccounts().subscribe((data: any) => {
      this.accounts = data;
      console.log(this.accounts);
    });
  }

  word: string = '';
  filter() {
    this._accountService.getFilteredAccounts(this.word).subscribe(
      (data: any) => {
        this.accounts = data;
        console.log(this.accounts);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  column: string = '';
  order: string = '';
  sort() {
    this._accountService.getSortedAccounts(this.column, this.order).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert('Internal Server error');
      }
    );
  }

  page: number = 0;
  limit: number = 0;
  pagination() {
    this._accountService.getPaginatedAccounts(this.page, this.limit).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  delete(id: number) {
    if (confirm('Are you sure to delete?') == true) {
      this._accountService.deleteAccount(id).subscribe(
        (data: any) => {
          alert('Record Deleted Successfully');
          this.pageLoad();
        },
        (err: any) => {
          alert('Internal Server Error');
        }
      );
    } else {
      alert('You have canceled');
    }
  }
}
