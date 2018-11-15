import { LoggedInService } from './../../logged-in.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({selector: 'app-signin', templateUrl: './signin.component.html', styleUrls: ['./signin.component.css'], encapsulation: ViewEncapsulation.None})
export class SigninComponent implements OnInit {

  error = false;
  errormsg = '';

  constructor(private authService : AuthService,
              private router : Router,
            private _log: LoggedInService) {}

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

      const response = this.authService.signinUser(email, password).then((response) => {
        if (response.emailVerified) {
          this.authService.setIpOfUser();
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken().then((token: string) => this.setToken());
        } else {
          this.error = true;
          this.errormsg = 'Not able to sign in. ' + response;
        }
    }).catch((e) => {
      console.log('error is:', e);
      this.error = true;
      this.errormsg = e.message;
    });

  }

  async setToken() {
    const token = await firebase.auth().currentUser.getIdToken();
    this.authService.setToken();
    this.router.navigate(['/']);
  }

}
