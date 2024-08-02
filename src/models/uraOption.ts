import { UraSchedule, UrasSchedule } from "./uraSchedule";

export interface UrasOptionProp {
  options: {
    id: number;
    ivr_id: number;
    dest: string;
    selection: string;
    ivr_ret: boolean;
    spoken: string;
    schedules: UrasSchedule[];
    // schedule_group: string;
  }[];
}

export interface UraOptionProp {
  options: {
    id: number;
    ivr_id: number;
    dest: string;
    selection: string;
    ivr_ret: boolean;
    spoken: string;
    schedules: UrasSchedule[];
    // schedule_group: string;
  };
}

export interface UraOption {
  id: number;
  ivr_id: number;
  dest: string;
  selection: string;
  ivr_ret: boolean;
  spoken: string;
  schedules: UrasSchedule[];
  // schedule_group: string;
}
