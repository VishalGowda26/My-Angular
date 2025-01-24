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
    type: new FormControl(),
    // busfee: new FormControl(),
    // hostelfee: new FormControl(),
  });

  //*  NOTE:  loading in constructor so that when the form loads this data will also be loaded & we can use dynamic data in forms
  constructor() {
    this.userForm.get('type')?.valueChanges.subscribe((data: any) => {
      if (data == 'dayscholar') {
        this.userForm.addControl('busfee', new FormControl());
        this.userForm.removeControl('hostelfee');
      } else {
        this.userForm.addControl('hostelfee', new FormControl());
        this.userForm.removeControl('busfee');
      }
    });
  }

  create() {
    console.log(this.userForm.value);
  }
}
