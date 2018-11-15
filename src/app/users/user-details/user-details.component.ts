import { CsvService } from 'angular2-json2csv';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import * as moment from 'moment';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  uid: string;
  private sub: any;

  isDesc : boolean = false;
  column : string = 'quiz';
  direction : number;

  public solved: Array<any> = [];
  public logout: Array<any> = [];
  public presence: Array<any> = [];
  public user;

  constructor(private route: ActivatedRoute,
    private afd: AngularFireDatabase,
    private _csv: CsvService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.uid = params['uid'];

      firebase.database()
      .ref('/users/' + this.uid).child('/user').once('value', snapshot => {
          this.user = snapshot.val();
          console.log(this.user);
      });

      this.afd.list('/solved/' + this.uid).subscribe(data => {
        this.solved = data;
      });
    });


  }

  sort(property) {
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.solved.sort((a, b) => {
        if (a[property] < b[property]) {
          return -1 * direction;
        } else if (a[property] > b[property]) {
          return 1 * direction;
        } else {
          return 0;
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getCSV(){
    let csvItems = this.solved.slice();
    csvItems.unshift({
      chapter: 'Chapter',
      type: 'Chapter',
      date: 'Date Given',
      score: 'Percent Scored',
      quizID: 'Quiz ID',
      subject: 'Subject',
    });
    csvItems.unshift({
      chapter: '',
      type: '',
      date: '',
      score: '',
      quizID: '',
      subject: '',
    });
    csvItems.unshift(
      {
        uid: this.uid,
        fullName: this.user.fullName,
        phoneNumber: this.user.phoneNumber,
        emailId: this.user.emailId,
        typeOfCourse: this.user.typeOfCourse,
        attemptDate: moment(this.user.attemptDate).format('MMM YY'),
        attemptNo: this.user.attemptNo,
        gender: this.user.gender,
        dob: this.user. dob,
        address: this.user.address,
        pincode: this.user.pincode
      }
    );
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
    this._csv.download(data, 'fhc_user_' + this.user.fullName + "_" + moment().format('YYYYMMDD'));
  }

}
