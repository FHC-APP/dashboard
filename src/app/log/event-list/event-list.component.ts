import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events = [{
    eid: '19mi',
    name: 'Moulud Mo. Abdullah Yahya Saheb',
    abedi: '19mi Moharram 131 abedi',
    date: '9th Oct, 2017 7:40 am IST'
  }];
  constructor() { }

  ngOnInit() {
  }

}
