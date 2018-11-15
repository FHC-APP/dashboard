import { CsvService } from 'angular2-json2csv';
import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import * as moment from 'moment';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({selector: 'app-log', templateUrl: './log.component.html', styleUrls: ['./log.component.css']})
export class LogComponent implements OnInit {
  total_solved: any[] = [];
  records : Array < any > = [];
  isDesc : boolean = false;
  column : string = 'quiz';
  direction : number;

  public itemRef : firebase.database.Reference = firebase
    .database()
    .ref('/solved');
  constructor(private afd: AngularFireDatabase, private _csv: CsvService) {}

  ngOnInit() {
    this
      .itemRef
      .on('value', itemSnapshot => {
        this.records = [];
        let idx = 1;
        itemSnapshot.forEach(itemSnap => {
          this
            .records
            .push({
              uid: itemSnap.key,
              quiz: Object
                .keys(itemSnap.val())
                .length
            });
            const map = Object.keys(itemSnap.val()).map(i => itemSnap.val()[i]);
            const map1 = map.map(item => ({
              uid: itemSnap.key,
              ...item
            }));
            // console.log("MAP", map1);
            this.total_solved.push(...map1);
          return false;
        });
      });
  }

  sort(property) {
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.records.sort((a, b) => {
        if (a[property] < b[property]) {
          return -1 * direction;
        } else if (a[property] > b[property]) {
          return 1 * direction;
        } else {
          return 0;
        }
      });
  }

  getCSV(){
    let csvItems = this.total_solved.slice();
    csvItems.unshift({
      uid: 'User ID',
      chapter: 'Chapter',
      chapterType: 'Chapter',
      date: 'Date',
      marks: 'Marks',
      quizId: 'Quiz ID',
      subject: 'Subject'
    });
    const data = JSON.stringify(csvItems);
    console.log(data);
    this._csv.download(data, 'fhc_quiz_given_' + moment().format('YYYYMMDD'));
  }
}
