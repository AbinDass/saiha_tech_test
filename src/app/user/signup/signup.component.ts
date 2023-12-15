import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @Input() form!: FormGroup
  
  signupForm = new FormGroup({
    firstname: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(2),
    ]),
    lastname: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(2),
    ]),
    dob: new FormControl('', [
      Validators.required,
      this.isValidDate
    ]),
    gender: new FormControl('', [
      Validators.required, 
    ]),
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(8),
      Validators.pattern('^[0-9]{10}$'),
    ]),
    address: new FormControl('',[
      Validators.required,
      Validators.maxLength(40),
      Validators.minLength(10),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  private isValidDate(control: FormControl): { [key: string]: boolean } | null {
    const dateString = control.value;
  
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return { 'invalidDate': true };
    }
  
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      return { 'invalidDate': true };
    }
  
    return null;
  }

  signupSubmit(){
    if(this.signupForm.valid){
        let firstname = this.signupForm.value.firstname
        let lastname = this.signupForm.value.lastname
        let dob = this.signupForm.value.dob
        let gender = this.signupForm.value.gender
        let email = this.signupForm.value.email
        let phone = this.signupForm.value.phone
        let address = this.signupForm.value.address
        let password = this.signupForm.value.password
        let confirmpassword = this.signupForm.value.confirmpassword

        let userdata = {firstname,lastname,dob,gender,email,phone,address,password,confirmpassword}
        //dispatch the values on store or send data to server
    }
    

  }

  
inputBoxFirst = [
  {
    inputId: 'firstname',
    inputType: 'text',
    labelName: 'firstname',
    inputPlaceHolder: 'firstname'
  },
  {
    inputId: 'lastname',
    inputType: 'text',
    labelName: 'lastname',
    inputPlaceHolder: 'lastname'
  },
  {
    inputId: 'dob',
    inputType: 'date',
    labelName: 'dob',
    inputPlaceHolder: 'dob'
  },
  // {
  //   inputId: 'gender',
  //   inputType: 'radio',
  //   labelName: 'gender',
  //   inputPlaceHolder: 'gender'
  // },
  {
    inputId: 'phone',
    inputType: 'number',
    labelName: 'Mobile Number',
    inputPlaceHolder: '+91 ****3210'
  },
]

inputBoxSecond = [
  {
    inputId: 'address',
    inputType: 'text',
    labelName: 'Address',
    inputPlaceHolder: 'adress here'
  },
  {
    inputId: 'email',
    inputType: 'email',
    labelName: 'Email address',
    inputPlaceHolder: 'leroy@jenkins.com'
  },
  {
    inputId: 'password',
    inputType: 'password',
    labelName: 'Password',
    inputPlaceHolder: '********'
  },
  {
    inputId: 'confirmpassword',
    inputType: 'password',
    labelName: 'confirm Password',
    inputPlaceHolder: '********'
  }
]
}
