import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormGroup({
      village: new FormControl(),
      district: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
    }),
  });

  create() {
    console.log(this.userForm.value);
  }
}
