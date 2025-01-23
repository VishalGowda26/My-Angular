import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.css'],
})
export class UserTaskComponent {
  personForm: FormGroup = new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    fathername: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    mobile: new FormControl('',[
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    address: new FormGroup({
      addressLine: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),
      pincode: new FormControl('',[
        Validators.required,
        Validators.pattern('^[0-9]{6}$'),
      ]),
    }),
    // <!-- Dynamic Fields to Form -->
    type: new FormControl(),
    //  <!-- FormArray into Form -->
    marks: new FormArray([]),
  });

  // <!-- Dynamic Fields to Form -->
  constructor() {
    this.personForm.get('type')?.valueChanges.subscribe((data: any) => {
      if (data == 'dayscholar') {
        this.personForm.addControl('busfee', new FormControl());
        this.personForm.removeControl('hostelfee');
      } else {
        this.personForm.addControl('hostelfee', new FormControl());
        this.personForm.removeControl('busfee');
      }
    });
  }

  //  <!-- FormArray into Form -->
  get marksFormArray() {
    return this.personForm.get('marks') as FormArray;
  }

  addmarks() {
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(''),
        year: new FormControl(''),
        percentage: new FormControl('', [
          Validators.required,
          Validators.min(0),
          Validators.max(100),
        ]),
      })
    );
  }

  save() {
    console.log(this.personForm.value);
  }
}
