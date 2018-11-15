import { Component, OnInit } from '@angular/core';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';

import {CsvService} from 'angular2-json2csv';

import * as moment from 'moment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  filter = '';
  public items: Array<any> = [];
  public login: Array<any> = [];
  public logs: Array<any> = [];
  public itemRef: firebase.database.Reference = firebase.database().ref('/users');
  constructor(private afd: AngularFireDatabase, private _csv: CsvService) {
  }

  ngOnInit() {
    this.itemRef.on('value', itemSnapshot => {
      this.items = [];
      itemSnapshot.forEach( itemSnap => {
        this.items.push({
          uid: itemSnap.key,
          ...itemSnap.val().user,
          attemptDate: moment(itemSnap.val().user.attemptDate).format('MMM YY')
        });
        return false;
      });
    });
  }

  /**
   * address
 attemptDate
 attemptNo
 dob
 emailId
 fullName
 gender
 phoneNumber
 pincode
 typeOfCourse
   */

  getCSV(){
    let csvItems = this.items.slice();
    csvItems.unshift({
      uid: 'User ID',
      fullName: 'Name',
      phoneNumber: 'Phone Number',
      emailId: 'Email ID',
      typeOfCourse: 'Course',
      attemptDate: 'Attempt Date',
      attemptNo: 'Attempt Number',
      gender: 'Gender',
      dob: 'Date of Birth',
      address: 'Address',
      pincode: 'Pincode'
    });
    const data = JSON.stringify(csvItems);
    console.log(data);
    this._csv.download(data, 'fhc_users_' + moment().format('YYYYMMDD'));
  }

}
