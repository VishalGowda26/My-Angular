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
    _mailService.getMessage().subscribe((data: any) => {
      this.mails = data;
      console.log(this.mails);
    });
  }

  onUserChange() {
    this.mails.map((m:any)=>{
      if(m.userId==this.selectedUser){
        return this.mails;
      }
    })
  }

  
}
