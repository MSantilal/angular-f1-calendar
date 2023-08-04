import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/shared/interfaces/meetings-interface';
import { MeetingService } from './meeting.service';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'race-calendar',
  templateUrl: './race-calendar.component.html',
  styleUrls: ['./race-calendar.component.css'],
})
export class RaceCalendarComponent implements OnInit {
  raceMeetings!: Meeting[];

  constructor(
    private meetingService: MeetingService,
  ) {}

  ngOnInit() {
    this.raceMeetings = this.meetingService.getMeetings();
  }
}
