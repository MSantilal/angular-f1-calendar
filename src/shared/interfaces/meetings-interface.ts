export interface Meeting {
  raceNumber: number;
  startDate: Date;
  endDate: Date;
  circuit: Circuit;
  meetingOfficialName: string;
  sessions: Session[];
}

export interface Circuit {
  name: string;
  location: string;
  country: string;
  laps: number;
  trackImg: string;
  countryImg: string;
}

export interface Session {
  name: string;
  sessionTime: Date;
}
