import {LoggedInService} from './../logged-in.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Injectable()
export class AuthService {
  token : string;
  login : boolean;

  constructor(private router: Router,
    private af: AngularFireAuth,
    private _log: LoggedInService,
    private http: Http) {

  }

  signinUser(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    console.log('INDISE LOGOUT METHOD*****************************************');
    const uid = firebase.auth().currentUser.uid;
    let ip = '';
    this.getIpOfUser().then((data : string) => {
        ip = data;
        //this._log.userLoggedOut(ip, uid);
    firebase.database().ref('/users').child(uid).off();
    firebase.auth().signOut();
     this.token = null;
     this.router.navigate(['/signin']);
      });
  }

  getToken() {
    firebase
      .auth()
      .currentUser
      .getToken()
      .then((token : string) => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  getUid() {
    return firebase
      .auth()
      .currentUser
      .uid;
  }

  async setIpOfUser() {
    const ip = await this.getIpOfUser();
    //this._log.userLoggedIn(ip, firebase.auth().currentUser.uid);
    console.log(ip);
  }

  async setToken() {
    this.token = await firebase
      .auth()
      .currentUser
      .getIdToken();
    console.log(this.token);
  }

  getIpOfUser() {
    let ip = 'none';
    return new Promise(resolve => {
      this
        .http
        .get('https://api.ipify.org?format=json')
        .map(res => res.json())
        .subscribe(data => {
          ip = data.ip;
          resolve(ip);
        });
    });

  }

  getLoginStatus() {
    return this.login;
  }

  setLoginStatus(status) {
    this.login = status;
  }
}
