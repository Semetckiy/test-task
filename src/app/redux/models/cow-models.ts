export interface CowItem {
  healthIndex: number;
  endDate: number;
  minValueDateTime: number;
  type: string;
  cowId: number;
  animalId: string;
  eventId: number;
  deletable: boolean;
  lactationNumber: number;
  daysInLactation: number;
  ageInDays: number;
  startDateTime: number;
  reportingDateTime: number;
}

export interface CowItems {
  offset: number;
  limit: number;
  total: number;
  result: CowItem[];
}

export interface CowFilter {
  offset: number;
  limit: number;
}
