import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css'],
})
export class BmiComponent {
  height: number = 0;
  weight: number = 0;
  result: number = 0;
  caution: string = '';
  caution1: string = '';

  checkBMI() {
    this.result=this.weight / (this.height * 0.3048 * (this.height * 0.3048))
    this.result = Math.ceil(this.result * 100) / 100;
    if (this.result < 18.5 && this.result > 0) {
      this.caution = 'underweight';
      this.caution1 = 'May indicate malnutrition or other health concerns.';
      console.log(this.caution, this.caution1);
    } else if (this.result >= 18.5 && this.result < 25) {
      this.caution = 'Normal';
      this.caution1 =
        'Generally associated with a lower risk of chronic diseases.';
      console.log(this.caution, this.caution1);
    } else if (this.result >= 25 && this.result < 30) {
      this.caution = 'OverWeight';
      this.caution1 =
        'May indicate an increased risk of heart disease, diabetes, and other health issues.';
      console.log(this.caution, this.caution1);
    } else if (this.result >= 30 && this.result < 35) {
      this.caution = 'Obese';
      this.caution1 =
        'Higher risk for various health conditions like hypertension, diabetes, and heart disease.';
    } else if (this.result >= 35 && this.result < 40) {
      this.caution = 'Severly Obese';
      this.caution1 =
        'Higher risk for various health conditions like hypertension, diabetes, and heart disease.';
    } else if (this.result >= 40) {
      this.caution = 'Morbidly Obese';
      this.caution1 =
        'Higher risk for various health conditions like hypertension, diabetes, and heart disease.';
    } else {
      alert('error');
    }
  }
}
