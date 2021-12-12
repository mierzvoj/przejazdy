import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
=======
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AppRoutingModule } from '../../app-routing.module';
import { AuthGuard } from '../../service/auth.guard';
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
  constructor(
    private authService: AuthService,
    private router: Router,
    public formBuilder: FormBuilder
  ) { }

  username = '';
  password = '';
  submitted = false;
  login: FormGroup = new FormGroup({
    username: new FormControl('undefined', [Validators.required]),
    password: new FormControl('undefined', [Validators.required]),
  });

  ngOnInit(): void { }

=======
  constructor(private authGuard: AuthGuard, private router: Router) {}

  ngOnInit(): void {
    this.authGuard.authenticate('', '');
  }
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
  onLogin(): void {
    const x = false;
    // const subscription = new Observable(x => { if(this.authGuard.authenticate('', '') === true)},);

<<<<<<< HEAD
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['/overview']);
    } else {
    }
  }

  onSubmit(): void {
    this.authService.authenticate(this.login.value).subscribe((resp) => {
      if (resp === true) {
        this.router.navigate(['/overview']);
      } else {
      }
    });
  }

  private isFormSubmitted(): boolean {
    return this.submitted;
  }

  getFormControl(name: string): FormControl {
    return this.login.get(name) as FormControl;
  }
=======
    if (true) {
      this.router.navigate(['/home']);
    } else {
    }
  }
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
}
