import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
})
export class MailComponent {
  mails: any = [];
  filteredMails: any;
  selectedUser: any;

  constructor(private _mailService: MailService) {
    this.loadMails();
  }

  // Load the mails
  loadMails() {
    this._mailService.getMessage().subscribe((data: any) => {
      this.mails = data;
      // console.log(this.mails);
    });
  }

  // getMails based on Id
  id: number = 0;
  getMailsById() {
    this._mailService.getMessageById(this.id).subscribe(
      (data: any) => {
        this.mails = data;
        console.log(this.mails);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  // getMails based on Id
  completed: boolean = false;
  filterUnread() {
    this._mailService.filterMessages(this.completed, this.id).subscribe(
      (data: any) => {
        this.mails = data;
        console.log(this.mails);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }
}
