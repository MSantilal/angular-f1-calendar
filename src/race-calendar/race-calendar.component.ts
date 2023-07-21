import { Component, OnInit } from '@angular/core';

interface Circuit {
  name: string;
  number: number;
  location: string;
  imageSource: string;
}

@Component({
  selector: 'race-calendar',
  templateUrl: './race-calendar.component.html',
  styleUrls: ['./race-calendar.component.css'],
})
export class RaceCalendarComponent implements OnInit {
  circuits:Circuit[] = [
    {
      name: 'Bahrain International Circuit',
      number: 1,
      location: 'Sakhir',
      imageSource: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/4col-retina/image.png',
    },
    {
      name: 'Jeddah Corniche Circuit',
      number: 2,
      location: 'Jeddah',
      imageSource: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png.transform/7col-retina/image.png',
    },
  ];

  isDisplayed = true;

  constructor() {}

  ngOnInit() {}

  toggleCircuits() {
    //Can also been done on the template
    this.isDisplayed = !this.isDisplayed;
  }
}
