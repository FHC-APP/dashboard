import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: {eid: string, name: string, abedi: string, date: string};
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
