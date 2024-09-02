export interface UraSchedule {
  id: number;
  ivr_id: number;
  ivr_option_id: number;
  destination: string;
  days_of_week: [number];
  month: [number];
  day_of_month: [number];
  time:[string]

}

export interface UrasSchedule {
  schedules: {
    id: number;
    ivr_id: number;
    ivr_option_id: number;
    days_of_week: [number];
    month: [number];
    day_of_month: [number];
    time:[string]
    destination: string;
  }[];
}
