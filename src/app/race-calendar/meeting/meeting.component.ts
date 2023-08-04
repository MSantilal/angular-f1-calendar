import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Meeting } from 'src/shared/interfaces/meetings-interface';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent implements OnInit {
  @Input() meeting!: Meeting;
  @Output() onMeetingSelected = new EventEmitter<Meeting>();

  constructor() {}

  ngOnInit() {
  }

  addToWishList() {
    this.onMeetingSelected.emit(this.meeting);
  }
}
