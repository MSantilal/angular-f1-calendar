import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RaceCalendarModule } from './race-calendar/race-calendar.module';
import { WishListComponent } from './wish-list/wish-list.component';

@NgModule({
  declarations: [	
    AppComponent,
      WishListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RaceCalendarModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
