import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceCalendarComponent } from './race-calendar/race-calendar.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {
    path: '',
    component: RaceCalendarComponent,
  },
  {
    path: 'wish-list',
    component: WishListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
