import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  id: string;
  login = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.getUsersWhoHaveSolvedQuiz(this.id, (snap) => {
          this.login.push({
            name: snap.val().name,
            uid: snap.val().uid
          });
        });
      }
    );
  }

  getUsersWhoHaveSolvedQuiz(ev, cb) {
    const attendees = firebase.database().ref('solved/');
    attendees.on('child_added', snap => {
      let userRef = firebase.database().ref('users/' + snap.key).child('/user');
      userRef.once('value', cb);
    });
  }

}
