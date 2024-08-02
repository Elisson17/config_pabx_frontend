export interface UraSchedule {
  id: number;
  ivr_id: number;
  ivr_option_id: number;
  init_day_of_week: string;
  end_day_of_week: string;
  start_time: string;
  end_time: string;
  recording_schedule: string;
  destination: string;
}

export interface UrasSchedule {
  schedules: {
    id: number;
    ivr_id: number;
    ivr_option_id: number;
    init_day_of_week: string;
    end_day_of_week: string;
    start_time: string;
    end_time: string;
    recording_schedule: string;
    destination: string;
  }[];
}
