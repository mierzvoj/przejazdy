import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css'],
})
export class UserregComponent implements OnInit {
  submitted = false;
  registered = false;
<<<<<<< HEAD
=======

>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
  userForm: FormGroup = new FormGroup({});

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      first_name: [
        '',
        [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{3,}$')],
      ],
      second_name: [
        '',
        [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{3,}$')],
      ],
      home_address: ['', [Validators.required]],
      email_address: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ],
      ],
    });
  }

  invalidFirstName(): boolean {
    const result =
      !this.isFormControlValid(this.userForm.controls.first_name.errors) &&
      !this.isFormSubmitted();
    console.log('invalid first name', result);
    return result;
  }

  invalidSecondName(): boolean {
    const result =
      !this.isFormControlValid(this.userForm.controls.second_name.errors) &&
      !this.isFormSubmitted();
    console.log('invalid sname', result);
    return result;
  }

  invalidAddress(): boolean {
    const result =
      !this.isFormControlValid(this.userForm.controls.home_address.errors) &&
      !this.isFormSubmitted();
    console.log('invalidAddress:', result);
    return result;
  }

  invalidEmailAddress(): boolean {
    const result =
      !this.isFormControlValid(this.userForm.controls.email_address.errors) &&
      !this.isFormSubmitted();
    console.log('invalidEmail:', result);
    return result;
  }

  invalidPhoneNo(): boolean {
    const result =
<<<<<<< HEAD
      !this.isFormControlValid(this.userForm.controls.phone.errors) &&
=======
      !this.isPhoneValid(this.userForm.controls.phone.errors) &&
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
      !this.isFormSubmitted();
    console.log('invalidPhone:', result);
    return result;
  }

<<<<<<< HEAD
  // isPhoneValid(errors: ValidationErrors | null): boolean {
  //   return this.validatePhone(errors);
  // }

  // validatePhone(errors: ValidationErrors | null): boolean {
  //   return errors === null;
  // }
=======
  isPhoneValid(errors: ValidationErrors | null): boolean {
    return this.validatePhone(errors);
  }

  validatePhone(errors: ValidationErrors | null): boolean {
    return errors === null;
  }
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a

  invalidPassword(): boolean {
    const result =
      !this.isFormControlValid(this.userForm.controls.password.errors) &&
      !this.isFormSubmitted();
    console.log('invalidPasswd:', result);
    return result;
  }

  isFormControlValid(errors: ValidationErrors | null): boolean {
    return this.validateFormControl(errors);
  }

  validateFormControl(errors: ValidationErrors | null): boolean {
    return errors === null;
  }

  private isFormSubmitted(): boolean {
    return this.submitted;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userForm.invalid == true) {
      console.log('wrong data');
    } else {
      this.registered = true;
    }
  }

  getFormControl(name: string): FormControl {
<<<<<<< HEAD
    return this.userForm.get(name) as FormControl;
=======
    return this.userForm.get('first_name') as FormControl;
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
  }

  clearFormControlValue(name: string): void {
    const fc = this.getFormControl(name);
    fc.setValue(null);
  }

  hasValue(name: string): boolean {
    const fc = this.getFormControl(name);
<<<<<<< HEAD
    return fc.value !== null && fc.value !== undefined && fc.value !== '';
  }

  getErrorMessage(name: string): string {
    const fcErrors = this.getFormControl(name)?.errors;
    if (fcErrors) {
      const errors = Object.keys(fcErrors);
      if (errors.includes('required')) {
        return 'Wymagana wartość';
      }
      if (errors.includes('pattern')) {
        return 'Nieprawidłowy format';
      }
      return JSON.stringify(this.getFormControl(name)?.errors);
    }
    return '';
  }

=======
    return (fc.value !== null && fc.value !== undefined && fc.value !== '');
  }
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
}
