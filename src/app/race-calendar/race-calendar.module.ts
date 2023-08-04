import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingService } from './meeting.service';
import { RaceCalendarComponent } from './race-calendar.component';
import { MeetingComponent } from './meeting/meeting.component';
import { WishListService } from '../services/wish-list.service';

@NgModule({
  declarations: [RaceCalendarComponent, MeetingComponent],
  imports: [CommonModule],
  providers: [MeetingService,
  WishListService],
  exports: [RaceCalendarComponent],
})
export class RaceCalendarModule {}
