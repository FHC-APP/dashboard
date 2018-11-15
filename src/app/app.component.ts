import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LoggedInService } from './logged-in.service';
import {Component, OnInit, HostListener, NgZone} from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  zone: NgZone;
  uid = 'user';
  ip = 'ip';

  constructor(
    private afAuth: AngularFireAuth,
    private _auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {

  }


}
