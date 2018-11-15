import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import * as moment from 'moment';

@Injectable()
export class LoggedInService {

  public notificationRef: firebase.database.Reference;

    constructor() { }

    //   userLoggedIn(ip, userId): firebase.Promise<any> {
    //   // return firebase.database()
    //   //   .ref('/logged-in').child(userId).push({
    //   //   ip: ip,
    //   //   userId: userId,
    //   //   time: moment().format('D-MM-YYYY/hh:mm:ss')
    //   // });
    // }

    // userLoggedOut(ip, userId = 'something'): firebase.Promise<any> {
    //   return firebase.database()
    //     .ref('/logged-out').child(userId).push({
    //     ip: ip,
    //     userId: userId,
    //     time: moment().format('D-MM-YYYY/hh:mm:ss')
    //   });
    // }

}
