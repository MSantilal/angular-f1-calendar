import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RaceCalendarComponent } from 'src/app/race-calendar/race-calendar.component';
import { MeetingComponent } from 'src/app/race-calendar/meeting/meeting.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceCalendarComponent,
    MeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
