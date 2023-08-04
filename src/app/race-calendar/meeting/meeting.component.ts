import { Component, Input, OnInit } from '@angular/core';
import { WishListService } from 'src/app/services/wish-list.service';
import { Meeting } from 'src/shared/interfaces/meetings-interface';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent implements OnInit {
  @Input() meeting!: Meeting;

  constructor(private wishListService: WishListService) {}

  ngOnInit() {
  }

  addToWishList() {
    this.wishListService.add(this.meeting);
  }
}
