import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'race-calendar',
  templateUrl: './race-calendar.component.html',
  styleUrls: ['./race-calendar.component.css'],
})
export class RaceCalendarComponent implements OnInit {
  raceSrc1 =
    'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/4col-retina/image.png';
  track1 = 'Bahrain International Circuit';
  raceNumber1 = 1;
  raceLocation1 = 'Sakhir';

  raceSrc2 =
    'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png.transform/7col-retina/image.png';
  track2 = 'Jeddah Corniche Circuit';
  raceNumber2 = 2;
  raceLocation2 = 'Jeddah';
  isDisabled: any;

  trackName: string = '';
  handleClick() {
    alert('hello, this is not bound')
  }

  constructor() {}

  ngOnInit() {}
}
