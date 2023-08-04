import { Injectable } from '@angular/core';
import { Meeting } from 'src/shared/interfaces/meetings-interface';

@Injectable({
  providedIn: 'root',
})
export class MeetingService {

  //Should really be getting from an API here but aim here is UI stuff only...
  getMeetings(): Meeting[] {
    return [
      {
        raceNumber: 1,
        startDate: new Date(2023, 3, 3),
        endDate: new Date(2023, 3, 5),
        circuit: {
          name: 'Bahrain International Circuit',
          location: 'Sakhir',
          country: 'Bahrain',
          laps: 57,
          countryImg:
            'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png.transform/2col-retina/image.png',
          trackImg:
            'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/4col-retina/image.png',
        },
        meetingOfficialName: 'FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2023',
        sessions: [
          {
            name: 'Practice 1',
            sessionTime: new Date(2023, 3, 3),
          },
          {
            name: 'Practice 2',
            sessionTime: new Date(2023, 3, 3),
          },
          {
            name: 'Practice 3',
            sessionTime: new Date(2023, 3, 4),
          },
          {
            name: 'Qualifying',
            sessionTime: new Date(2023, 3, 4),
          },
          {
            name: 'Race',
            sessionTime: new Date(2023, 3, 5),
          },
        ],
      },
      {
        raceNumber: 2,
        startDate: new Date(2023, 3, 17),
        endDate: new Date(2023, 3, 19),
        circuit: {
          name: 'Jeddah Corniche Circuit',
          location: 'Jeddah',
          country: 'Saudi Arabia',
          laps: 50,
          countryImg:
            'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/saudi-arabia-flag.png.transform/2col-retina/image.png',
          trackImg:
            'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png.transform/7col-retina/image.png',
        },
        meetingOfficialName: 'FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2023',
        sessions: [
          {
            name: 'Practice 1',
            sessionTime: new Date(2023, 3, 17),
          },
          {
            name: 'Practice 2',
            sessionTime: new Date(2023, 3, 17),
          },
          {
            name: 'Practice 3',
            sessionTime: new Date(2023, 3, 18),
          },
          {
            name: 'Qualifying',
            sessionTime: new Date(2023, 3, 18),
          },
          {
            name: 'Race',
            sessionTime: new Date(2023, 3, 19),
          },
        ],
      },
    ];
  }

  constructor() {}
}
