import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

@Injectable()
export class LiveLinkService {

  constructor() { }

  getLiveLink(): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.database()
        .ref('/live').on('value', snapshot => {
          resolve(snapshot.val());
        });
    });
  }

}
