import { Injectable } from '@angular/core';
import { Meeting } from 'src/shared/interfaces/meetings-interface';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  get() {
    return this.wishList;
  }
  wishList: Meeting[] = [];

  constructor() {}

  add(meeting: Meeting) {
    if (!this.wishList.includes(meeting)) {
      this.wishList.push(meeting);
      console.log(`Added ${meeting.meetingOfficialName} to Wish List`);
    } else {
      alert('meeting exists!');
    }
  }
}
